import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';  // import icon

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleSendResetEmail = () => {
    if (!email) {
      Alert.alert('Lỗi', 'Vui lòng nhập email.');
      return;
    }

    // Regex kiểm tra email hợp lệ
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Lỗi', 'Email không đúng định dạng.');
      return;
    }

    // Nếu hợp lệ
    Alert.alert('Thành công', 'Chúng tôi đã gửi email hướng dẫn đặt lại mật khẩu!');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Đặt lại mật khẩu</Text>
      
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nhập email của bạn"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={handleSendResetEmail}>
        <Icon name="refresh" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.resetButtonText}>GỬI EMAIL KHÔI PHỤC</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backToLoginText}>Quay lại đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  headerText: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '100%',
  },
  icon: { marginRight: 10 },
  input: { flex: 1, height: 40 },

  resetButton: { 
    backgroundColor: '#f28c38', 
    padding: 10, 
    borderRadius: 5, 
    width: '100%', 
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: { marginRight: 10 },
  resetButtonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  backToLoginText: { color: '#1da1f2', marginVertical: 10 },
});

export default ForgotPasswordScreen;
