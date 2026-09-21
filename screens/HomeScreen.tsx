import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
    return (
        
        <View style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.title}>
                    Crie seu catálogo de livros lidos e compartilhe sua experiencia!
                </Text>
                <Text style={styles.description}>
                </Text>
            </View>
        </View>
 );
}
const styles = StyleSheet.create({
 container: {
 flex: 1,
 },
 header: {
 padding: 20,
 },
 logo: {
 fontSize: 24,
 fontWeight: 'bold',
 },
 banner: {
 padding: 20,
 },
 title: {
 fontSize: 28,
 fontWeight: 'bold',
 },
 description: {
 fontSize: 16,
 marginTop: 10,
 padding: 20,
 
 },
});