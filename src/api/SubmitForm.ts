async function submitForm(formData: FormData): Promise<void> {
  try {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxcxNlBBVR8KwkwJv_yPOPfbqBTA5kOBLtrb6c7xbIfxeeUMEvQpM47gB64RWl8rDyp/exec";

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
