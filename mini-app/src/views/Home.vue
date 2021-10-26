<template>
  <Navbar />
  <div class="home flex justify-center flex-col items-center">
    <img
      src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBldCUyMHNob3B8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
      class="w-full h-64 object-cover"
      alt=""
    />
    <div
      class="
        flex flex-col
        -m-24
        items-center
        bg-gray-400
        w-1/3
        p-10
        rounded-lg
        shadow-xl
      "
    >
      <img
        class="h-64 w-64 rounded-full"
        src="https://images.unsplash.com/photo-1490650034439-fd184c3c86a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
        alt=""
      />
      <h5 class="text-2xl font-semibold">Some Image Information</h5>
      <p class="text-left mt-4">
        <span class="text-blue-900 font-extrabold">ipsum dolor </span> sit amet
        consectetur adipisicing elit. Accusantium odit totam porro blanditiis
        earum sed exercitationem labore fuga alias non, perferendis aliquid
        quibusdam! Suscipit, maiores quae tempora repellendus sit nulla?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>


