import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.headerContainer}>
          <View style={styles.profileSection}>
            <Image
              source={require("../assets/profile.png")}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.locationLabel}>Your Location</Text>
              <View style={styles.locationRow}>
                <Icon name="location-outline" size={16} color="#000" />
                <Text style={styles.locationText}>Savar, Dhaka</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Icon name="notifications-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Icon
              name="search-outline"
              size={20}
              color="#666"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="Search your food"
              style={styles.searchInput}
              placeholderTextColor="#666"
            />
            <Icon
              name="options-outline"
              size={20}
              color="#666"
              style={styles.filterIcon}
            />
          </View>
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity
            style={[styles.categoryButton, styles.activeCategoryButton]}
          >
            <View
              style={[styles.categoryIconContainer, styles.activeCategoryIcon]}
            >
              <Icon name="pizza-outline" size={24} color="#fff" />
            </View>
            <Text style={[styles.categoryText, styles.activeCategoryText]}>
              PIZZA
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <View style={styles.categoryIconContainer}>
              <Icon name="fast-food-outline" size={24} color="#000" />
            </View>
            <Text style={styles.categoryText}>BURGER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <View style={styles.categoryIconContainer}>
              <Icon name="wine-outline" size={24} color="#000" />
            </View>
            <Text style={styles.categoryText}>DRINK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <View style={styles.categoryIconContainer}>
              <Icon name="restaurant-outline" size={24} color="#000" />
            </View>
            <Text style={styles.categoryText}>RICE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.promoContainer}>
          <View style={styles.promoDetails}>
            <Text style={styles.promoTitle}>BURGER</Text>
            <Text style={styles.promoSubtitle}>Today's Hot Offer</Text>
            <View style={styles.promoRating}>
              <Icon name="star" size={16} color="#ffd700" />
              <Text style={styles.promoRatingText}>4.9 (5+ Rating)</Text>
            </View>
            <View style={styles.promoDiscount}>
              <Text style={styles.promoDiscountText}>10% OFF</Text>
            </View>
          </View>
          <Image
            source={require("../assets/burger.png")}
            style={styles.promoImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.popularHeader}>
          <Text style={styles.popularTitle}>Popular Items</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.popularItemsContainer}
        >
          <TouchableOpacity style={styles.popularItemCard}>
            <Image
              source={require("../assets/burger.png")}
              style={styles.popularItemImage}
              resizeMode="cover"
            />
            <Text style={styles.popularItemText}>BURGER</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.popularItemCard}>
            <Image
              source={require("../assets/pizza.jpg")}
              style={styles.popularItemImage}
              resizeMode="cover"
            />
            <Text style={styles.popularItemText}>PIZZA</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    paddingTop: 80,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  locationLabel: {
    fontSize: 12,
    color: "#666",
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 4,
  },
  notificationButton: {
    padding: 8,
  },
  searchContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5D3EBC",
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 50,
  },
  searchIcon: {
    marginRight: 10,
    color: "#fff",
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    fontSize: 16,
  },
  filterIcon: {
    marginLeft: 10,
    color: "#fff",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  categoryButton: {
    alignItems: "center",
  },
  activeCategoryButton: {
    opacity: 1,
  },
  categoryIconContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    padding: 15,
    marginBottom: 8,
  },
  activeCategoryIcon: {
    backgroundColor: "#4CD964",
  },
  categoryText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "600",
  },
  activeCategoryText: {
    color: "#000",
  },
  promoContainer: {
    backgroundColor: "#1a1a1a",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 20,
  },
  promoDetails: {
    flex: 1,
  },
  promoTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  promoSubtitle: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 10,
  },
  promoRating: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  promoRatingText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 12,
  },
  promoDiscount: {
    backgroundColor: "#5D3EBC",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  promoDiscountText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  promoImage: {
    width: 120,
    height: 120,
  },
  popularHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  popularTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAllText: {
    color: "#666",
  },
  popularItemsContainer: {
    paddingLeft: 15,
  },
  popularItemCard: {
    marginRight: 15,
    alignItems: "center",
  },
  popularItemImage: {
    width: 140,
    height: 140,
    borderRadius: 20,
  },
  popularItemText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "600",
  },
});

export default HomeScreen;
