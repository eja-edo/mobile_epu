import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  // State quản lý màu nền
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  // Hàm xử lý thay đổi màu
  const handleColorChange = (newColor) => {
    setBackgroundColor(newColor);
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Các button thay đổi màu */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ff0000' }]}
          onPress={() => handleColorChange('#ff0000')}>
          <Text style={styles.buttonText}>Đỏ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#00ff00' }]}
          onPress={() => handleColorChange('#00ff00')}>
          <Text style={styles.buttonText}>Xanh lá</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#0000ff' }]}
          onPress={() => handleColorChange('#0000ff')}>
          <Text style={styles.buttonText}>Xanh dương</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#000' }]}
          onPress={() => handleColorChange('#000')}>
          <Text style={styles.buttonText}>Đen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#964B00' }]}
          onPress={() => handleColorChange('#964B00')}>
          <Text style={styles.buttonText}>Nâu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'rgb(255, 255, 0)' }]}
          onPress={() => handleColorChange('rgb(255, 255, 0)')}>
          <Text style={styles.buttonText}>Vàng</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'clumn',
    gap: 20,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;