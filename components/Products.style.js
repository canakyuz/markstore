import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#f5f5f5",
        margin: 8,
        borderRadius: 10,
        width:180,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,        
        alignItems: "center"
    },
    body: {
        marginTop: 10,
        marginBottom: 5,
        alignItems: "center",
    },
    image: {
        borderRadius: 10,
        width: 160,
        height: 180,
        resizeMode:'stretch',

    },
    top: {
        marginLeft: 2,
        marginRight:2
    },
    bottom: {
        marginTop:3,
        marginBottom:4
    },
    title: {     
        fontWeight: 'bold',
        width: 120,  
        fontSize: 14,    
    },
    price: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'right',
        marginTop: 12
    },
    inStock: {
        fontWeight: 'bold',
        fontSize: 12,
        color: 'red',
        textAlign: 'right',
        marginTop: 12
    }
});
