

    const requiredFields = ['id', 'name', 'email', 'password'];
    let isFormValid = true;

    requiredFields.forEach(field => {
        if (!student[field] || student[field].trim() === "") {
            console.log(`${field} field is empty`);
            isFormValid = false;
        }
    });

    if (!isFormValid) {
        return;
        }
