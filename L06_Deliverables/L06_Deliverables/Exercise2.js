import React, { useState } from 'react';
import { View, Text, Image, ScrollView, Button, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// ===== Quiz questions =====
const questions = [
    {
        image: require('./images/rp.jpg'),
        question: 'Which year was Republic Polytechnic set up?',
        options: ['1998', '2002', '2010'],
        answer: '2002',
    },
    {
        image: require('./images/dtech.jpg'),
        question: 'What is the short form for the Diploma in Information Technology at RP?',
        options: ['DIT', 'DTECH', 'DINT'],
        answer: 'DTECH',
    },
    {
        image: require('./images/code.jpg'),
        question: 'What is the course code for the Diploma in Information Technology?',
        options: ['R47', 'R55', 'R18'],
        answer: 'R47',
    },
    {
        image: require('./images/major.jpg'),
        question: 'Which of these is a major in the Diploma in Information Technology?',
        options: ['IT Solution Management', 'Full Stack Development', 'Business Process And Automation '],
        answer: 'Full Stack Development',
    },
];

// ===== Reusable card for one question =====
const QuestionCard = ({ number, image, question, options, selected, onSelect }) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <Text style={styles.question}>
                {number}. {question}
            </Text>
            <Picker selectedValue={selected} onValueChange={(value) => onSelect(value)}>
                <Picker.Item label="Select an answer..." value="" />
                {options.map((option) => (
                    <Picker.Item key={option} label={option} value={option} />
                ))}
            </Picker>
        </View>
    );
};

// ===== Main quiz screen =====
const Exercise2 = () => {
    const [answers, setAnswers] = useState(questions.map(() => ''));

    const handleSelect = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        let score = 0;
        for (let i = 0; i < questions.length; i++) {
            if (answers[i] === questions[i].answer) {
                score++;
            }
        }

        let message = 'You can do better next time.';
        if (score === questions.length) {
            message = 'Well done! You really know RP!';
        } else if (score >= questions.length / 2) {
            message = 'Good try!';
        }

        Alert.alert(
            'Your Score',
            'You have ' + score + ' out of ' + questions.length + ' correct answers!\n' + message
        );
    };

    return (
        <ScrollView style={styles.page} contentContainerStyle={styles.content}>
            <Text style={styles.title}>🎓 How well do you know RP?</Text>

            {questions.map((q, index) => (
                <QuestionCard
                    key={index}
                    number={index + 1}
                    image={q.image}
                    question={q.question}
                    options={q.options}
                    selected={answers[index]}
                    onSelect={(value) => handleSelect(index, value)}
                />
            ))}

            <Button title="Submit Answers" onPress={handleSubmit} />
        </ScrollView>
    );
};

export default Exercise2;

// ===== Styles =====
const styles = StyleSheet.create({
    page: { backgroundColor: '#eef2f7' },
    content: { padding: 16, paddingTop: 50, paddingBottom: 40 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 12,
        marginBottom: 16,
        elevation: 4,
    },
    image: { width: '100%', height: 200, borderRadius: 12, resizeMode: 'cover' },
    question: { fontSize: 16, fontWeight: '600', marginTop: 10 },
});