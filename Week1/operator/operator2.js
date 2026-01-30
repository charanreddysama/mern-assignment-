
     let price = 1299;

// 1. If price < 500 → "Budget Course"
//    2. If price between 500–1000 → "Standard Course"
//    3. If price > 1000 → "Premium Course"
//    4. Store label in courseTag
//    5. Print the label
        let courseTag = price < 500 ? "Budget Course" :
                          price <= 1000 ? "Standard Course" :
                            "Premium Course";
    console.log(courseTag);