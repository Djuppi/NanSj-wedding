async function submitForm(formData: FormData): Promise<void> {
  try {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyJPzqOgCyzbmxzpQMY-iOx3NOae54PlYegsV_Np_Ou20kn13GQVuPEAtNFJpPSj_HE/exec";

    await fetch(scriptURL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    console.log("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}

export default submitForm;
