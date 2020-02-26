const ctx: Worker = self as any;

// // Post data to parent thread
// ctx.postMessage({ foo: "foo" });

// // Respond to message from parent thread
// ctx.addEventListener("message", (event) => console.log(event));


ctx.addEventListener('message', async (e) => {
  const imageURL = e.data;
  const res = await fetch(imageURL)
  const blob = await res.blob();

  ctx.postMessage({
    imageURL,
    blob
  })
})