export const checkURL = (inputText) => {
    console.log("::: Running checkURL :::", inputText);
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    return regex.test(inputText);
}
