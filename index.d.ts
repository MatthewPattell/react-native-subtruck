declare module "@wowmaking/react-native-subtruck" {

    interface SubTruck {

        fetchProduct(project: string): Promise<Product>

        trackViewEvent(project: string, productId: string)

        trackPurchaseEvent(project: string, transaction: {
            orderId: string,
            productId: string,
            currency: string,
            revenue: number,
            purchaseToken: string,
            transactionReceipt: string,
            countryCode: string,
        })

    }

    interface Product {
        id: string,
        period: Period,
        trial: number,
    }

    enum Period {
        WEEKLY,
        MONTHLY,
        YEARLY,
    }
    

    export default SubTruck;

    export const WEEKLY: Period;
    export const MONTHLY: Period;
    export const YEARLY: Period;

}
