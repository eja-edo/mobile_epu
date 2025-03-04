import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', title: 'Food 1', origin: 'Viet Nam', price: '1$', image: require('../../assets/link_to_image_1.png') },
  { id: '2', title: 'Food 2', origin: 'Viet Nam', price: '3$', image: require('../../assets/link_to_image_2.png') },
  { id: '3', title: 'Food 3', origin: 'Viet Nam', price: '5$', image: require('../../assets/link_to_image_3.png') },
  { id: '4', title: 'Food 4', origin: 'Viet Nam', price: '2$', image: require('../../assets/link_to_image_4.png') },
  { id: '5', title: 'Food 5', origin: 'Viet Nam', price: '7$', image: require('../../assets/link_to_image_5.png') },
];

const promotions = [
  { id: '1', title: 'Food 1', origin: 'Viet Nam', price: '1$', image: require('../../assets/link_to_image_1.png'), discount: '10% OFF' },
  { id: '4', title: 'Food 4', origin: 'Viet Nam', price: '2$', image: require('../../assets/link_to_image_4.png'), discount: '5% OFF' },
];

const categories = [
  { id: '1', title: 'Pizza', image: require('../../assets/link_to_pizza_image.png') },
  { id: '2', title: 'Burgers', image: require('../../assets/link_to_burgers_image.png') },
  { id: '3', title: 'Steak', image: require('../../assets/link_to_steak_image.png') },
  { id: '4', title: 'Desserts', image: require('../../assets/link_to_dessert_image.png') },
  // Add more categories as needed
];

const ExplorerScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Image source={require('../../assets/location_pin.png')} style={styles.locationIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for meals or area"
        />
        <TouchableOpacity style={styles.searchButton}>
          <Image source={require('../../assets/search_icon.png')} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.topCategoriesHeader}>
        <Text style={styles.topCategories}>Top Categories</Text>
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('../../assets/filter_icon.png')} style={styles.filterIcon} />
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.title}</Text>
          </View>
        )}
        contentContainerStyle={styles.categories}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <View style={popularStyles.popularItemsHeader}>
        <Text style={popularStyles.popularItems}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={popularStyles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={popularStyles.item}>
            <View style={popularStyles.itemImageContainer}>
              <Image source={item.image} style={popularStyles.itemImage} />
            </View>
            <View style={popularStyles.itemInfo}>
              <Text style={popularStyles.itemTitle}>{item.title}</Text>
              <Text style={popularStyles.itemOrigin}>By {item.origin}</Text>
              <Text style={popularStyles.itemPrice}>{item.price}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={popularStyles.popularItemsList}
        showsHorizontalScrollIndicator={false}
      />
      <View style={promotionStyles.promotionsHeader}>
        <Text style={promotionStyles.promotions}>Promotions</Text>
        <TouchableOpacity>
          <Text style={promotionStyles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={promotions}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={promotionStyles.item}>
            <View style={promotionStyles.itemImageContainer}>
              <Image source={item.image} style={promotionStyles.itemImage} />
              {item.discount && (
                <View style={promotionStyles.discountLabel}>
                  <Text style={promotionStyles.discountText}>{item.discount}</Text>
                </View>
              )}
            </View>
            <View style={promotionStyles.itemInfo}>
              <Text style={promotionStyles.itemTitle}>{item.title}</Text>
              <Text style={promotionStyles.itemOrigin}>By {item.origin}</Text>
              <Text style={promotionStyles.itemPrice}>{item.price}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={promotionStyles.promotionsList}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginBottom: 10,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
  },
  searchButton: {
    marginLeft: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  topCategoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  topCategories: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  filterButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  categories: {
    marginBottom: 30,
  },
  categoryContainer: {
    alignItems: 'center',
    marginRight: 10,
  },
  categoryImage: {
    width: 110,
    height: 80,
    marginBottom: 5,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 16,
  },
  separator: {
    width: 10,
  },
});

const popularStyles = StyleSheet.create({
  popularItemsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: -50,
  },
  popularItems: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: 'blue',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  itemImageContainer: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  itemInfo: {
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  itemOrigin: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  popularItemsList: {
    flexGrow: 1,
  },
});

const promotionStyles = StyleSheet.create({
  promotionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  promotions: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: 'blue',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  itemImageContainer: {
    width: 200,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  itemInfo: {
    justifyContent: 'center',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
  itemOrigin: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  promotionsList: {
    flexGrow: 1,
  },
  discountLabel: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  discountText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ExplorerScreen;