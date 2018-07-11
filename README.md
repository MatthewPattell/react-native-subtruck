# @wowmaking/react-native-subtruck
[![npm](https://img.shields.io/npm/v/@wowmaking/react-native-subtruck.svg)](https://npmjs.com/package/@wowmaking/react-native-subtruck)

# ReactNative SDK for [SubTruck](https://subtruck.wowmaking.net)

## Installation

Install and link [react-native-appsflyer](https://www.npmjs.com/package/react-native-appsflyer)

Install and link [react-native-idfa](https://www.npmjs.com/package/@ptomasroos/react-native-idfa)

## API

### fetchProduct(project)
#### Parameter(s)
* **project:** String - Project ID registered in SubTruck
#### Returns Promise of
* **product:** 
    * **id:** String
    * **period:** String - `WEEKLY` | `MONTHLY` | `YEARLY`
    * **trial:** Number - amount days of free trial
```javascript
SubTruck.fetchProduct('com.wowapp')
    .then((product) => {
        console.log(product);
    });
```

### trackViewEvent(project, productId)
#### Parameter(s)
* **project:** String - Project ID registered in SubTruck
* **productId:** String
```javascript
SubTruck.trackViewEvent('com.wowapp', 'com.wowapp.full.weekly');
```

### trackPurchaseEvent(project, transaction)
#### Parameter(s)
* **project:** String - Project ID registered in SubTruck
* **transaction:** 
    * **orderId:** String
    * **productId:** String
    * **currency:** String
    * **revenue:** Double
    * **purchaseToken:** String - Android purchase info
    * **transactionReceipt:** String - iOS purchase info
    * **countryCode:** String - country code, required for iOS
```javascript
SubTruck.trackPurchaseEvent('com.wowapp', {
    orderId: 'wow-transaction-id',
    productId: 'com.wowapp.full.weekly',
    currency: 'USD',
    revenue: 4.99,
    purchaseToken: "gho...4n8",
    transactionReceipt: "od1...ju3",
    countryCode: "US",
);
```
