# @wowmaking/react-native-subtruck
[![npm](https://img.shields.io/npm/v/@wowmaking/react-native-subtruck.svg)](https://npmjs.com/package/@wowmaking/react-native-subtruck)

# ReactNative SDK for [SubTruck](https://subtruck.wowmaking.net)

## Installation

Install and link [react-native-appsflyer](https://www.npmjs.com/package/react-native-appsflyer)

Install and link [react-native-adjust](https://www.npmjs.com/package/react-native-adjust)

Install and link [react-native-device-info](https://www.npmjs.com/package/react-native-device-info)

## API

### fetchProduct(project)
Fetches product for current user.
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
Tracks event that current user has faced the product/price. Call it when user clicks 'Subscribe' button.
#### Parameter(s)
* **project:** String - Project ID registered in SubTruck
* **productId:** String
```javascript
SubTruck.trackViewEvent('com.wowapp', 'com.wowapp.full.weekly');
```

### trackPurchaseEvent(project, transaction)
Tracks event that current user has subscribed successfuly.
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
