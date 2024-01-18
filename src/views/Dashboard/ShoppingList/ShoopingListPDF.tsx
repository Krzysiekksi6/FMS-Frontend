import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const ShoopingListPDF = ({ shoppingList }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Lista zakupów #1</Text>
        <View>
          {shoppingList.map((item, index) => (
            <View>
              <Text>
                {item.productName}
              </Text>
              <Text>
               {item.quantity}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);

export default ShoopingListPDF;
