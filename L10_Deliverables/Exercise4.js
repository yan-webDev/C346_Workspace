import React, { useRef, useEffect } from 'react';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity, StyleSheet, Alert, useWindowDimensions } from 'react-native';

// ===== Warm food colour theme =====
const ORANGE = '#FF7043';
const CREAM = '#FFF6EE';
const DARK = '#2D2A26';
const GREY = '#7A746E';
const OPEN_GREEN = '#2E9E5B';
const CLOSED_RED = '#E04E4E';

const LIST_PADDING = 16;
const CARD_HEIGHT = 180;

// Helper so the Pexels links are short and load fast
const pexels = (id) => ({
    uri: 'https://images.pexels.com/photos/' + id + '/pexels-photo-' + id + '.jpeg?auto=compress&cs=tinysrgb&w=600',
});

// ===== Stall data =====
const stalls = [
    {
        key: 'Taiwanese', foodCourt: 'North Canteen', cuisine: 'Asian', isOpen: true, rating: 4.5,
        images: [
            require('./img/taiwan1.jpg'),
            require('./img/taiwan2.jpg'),
            require('./img/taiwan3.jpg'),
            require('./img/taiwan4.jpg'),
        ],
    },
    {
        key: 'Ayam Penyet', foodCourt: 'Koufu', cuisine: 'Local', isOpen: true, rating: 4.3,
        images: [
            require('./img/ayam1.jpg'),
            require('./img/ayam2.jpg'),
            require('./img/ayam3.jpg'),
            require('./img/ayam4.jpg'),
        ],
    },
    {
        key: 'Lemon Story', foodCourt: 'The Lawn', cuisine: 'Beverages', isOpen: false, rating: 4.7,
        images: [
            { uri: 'https://images.pexels.com/photos/40594/lemon-tea-cold-beverages-summer-offerings-40594.jpeg?auto=compress&cs=tinysrgb&w=600' },
            pexels(8619612),
            pexels(14884842),
            pexels(792613),
        ],
    },
    {
        key: 'Korean Fusion', foodCourt: 'The Lawn', cuisine: 'Korean', isOpen: true, rating: 4.4,
        images: [
            require('./img/korean1.jpg'),
            require('./img/korean2.jpg'),
            require('./img/korean3.jpg'),
            require('./img/korean4.jpg'),
        ],
    },
];

// ===== One card =====
const StallCard = ({ item }) => {
    const { width } = useWindowDimensions();
    const imageWidth = Math.round((width - LIST_PADDING * 2) * 0.5);

    const scrollRef = useRef(null);
    const indexRef = useRef(0);            // which slide is showing
    const total = item.images.length;

    // Extra copy of photo 1 at the end, so we can keep sliding right
    const slides = total > 1 ? [...item.images, item.images[0]] : item.images;

    const scrollToIndex = (index, animated) => {
        scrollRef.current?.scrollTo({ x: index * imageWidth, animated });
        indexRef.current = index;
    };

    // Go right. On the copy at the end, jump back to the real photo 1 without animation.
    const next = () => {
        const nextIndex = indexRef.current + 1;
        scrollToIndex(nextIndex, true);
        if (nextIndex === total) {
            setTimeout(() => scrollToIndex(0, false), 400);
        }
    };

    // Go left. On photo 1, jump to the copy first, then slide left to the last photo.
    const prev = () => {
        if (indexRef.current === 0) {
            scrollToIndex(total, false);
            setTimeout(() => scrollToIndex(total - 1, true), 20);
        } else {
            scrollToIndex(indexRef.current - 1, true);
        }
    };

    // Auto-slide every 3 seconds
    useEffect(() => {
        if (total <= 1) return;
        const timer = setInterval(next, 3000);
        return () => clearInterval(timer);
    }, [total, imageWidth]);

    // After a swipe: remember the position, and fix it if we landed on the copy
    const handleSwipe = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / imageWidth);
        if (index === total) {
            scrollToIndex(0, false);
        } else {
            indexRef.current = index;
        }
    };

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={styles.card}
            onPress={() => Alert.alert(item.key, item.foodCourt + ' • ' + item.cuisine)}
        >
            {/* Photo: left half of the card */}
            <View style={{ width: imageWidth, height: CARD_HEIGHT }}>
                <ScrollView
                    ref={scrollRef}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={handleSwipe}
                >
                    {slides.map((img, index) => (
                        <Image key={index} source={img} style={{ width: imageWidth, height: CARD_HEIGHT }} />
                    ))}
                </ScrollView>

                {total > 1 && (
                    <>
                        <TouchableOpacity style={[styles.arrow, { left: 6 }]} onPress={prev}>
                            <Text style={styles.arrowText}>‹</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.arrow, { right: 6 }]} onPress={next}>
                            <Text style={styles.arrowText}>›</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>

            {/* Description on the right */}
            <View style={styles.info}>
                <Text style={styles.name}>{item.key}</Text>
                <Text style={styles.detail}>📍 {item.foodCourt}</Text>
                <Text style={styles.detail}>🍴 {item.cuisine}</Text>
                <Text style={styles.detail}>⭐ {item.rating}</Text>
                <View style={[styles.statusBadge, { backgroundColor: item.isOpen ? OPEN_GREEN : CLOSED_RED }]}>
                    <Text style={styles.statusText}>{item.isOpen ? 'OPEN' : 'CLOSED'}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

// ===== Main screen =====
export default function Exercise4() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>🍽 RP Food Spotter </Text>
            </View>

            <FlatList
                data={stalls}
                renderItem={({ item }) => <StallCard item={item} />}
                contentContainerStyle={{ padding: LIST_PADDING }}
            />
        </View>
    );
}

// ===== Styles =====
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: CREAM },

    header: {
        backgroundColor: ORANGE,
        paddingTop: 50,
        paddingBottom: 16,
        paddingHorizontal: LIST_PADDING,
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
    },
    headerTitle: { color: 'white', fontSize: 24, fontWeight: 'bold' },

    card: {
        flexDirection: 'row',
        height: CARD_HEIGHT,
        backgroundColor: 'white',
        borderRadius: 16,
        marginBottom: 16,
        elevation: 4,
        overflow: 'hidden',
    },

    arrow: {
        position: 'absolute',
        top: CARD_HEIGHT / 2 - 15,
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(255,255,255,0.85)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowText: { color: ORANGE, fontSize: 24, fontWeight: 'bold', marginTop: -3 },

    info: { flex: 1, padding: 12, justifyContent: 'space-around' },
    name: { fontSize: 18, fontWeight: 'bold', color: DARK },
    detail: { fontSize: 14, color: GREY },
    statusBadge: {
        alignSelf: 'flex-start',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 3,
    },
    statusText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
});