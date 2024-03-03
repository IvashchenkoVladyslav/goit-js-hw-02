function checkForSpam(message) {
    const newMess = message.toLowerCase();
    const haveSpam1 = newMess.includes('spam');
    const haveSpam2 = newMess.includes('sale');
    if (haveSpam1 || haveSpam2) {
        return true;
    } else {
        return false;
    }
};
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("Trust me, this is not a spam message"));
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));