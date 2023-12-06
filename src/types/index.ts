interface Transaction {
    id: number;
    transactionDate: string;
    amount: string;
    type: string;
    status: string;
}

interface CreditData {
    companyName: string;
    address: string;
    registrationDate: string;
    numberOfEmployees: number;
    raisedCapital: string;
    turnover: string;
    netProfit: string;
    contactNumber: string;
    contactEmail: string;
    companyWebsite: string;
    loanAmount: string;
    loanInterest: string;
    accountStatus: string;
    transactions: Transaction[];
}

export default CreditData;