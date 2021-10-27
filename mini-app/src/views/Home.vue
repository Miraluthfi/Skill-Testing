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
      <h5 class="text-center text-2xl font-semibold">
        Ingin tenang saat pergi liburan? Yuk, titipkan Kucing Kesayangamu di
        Miaw Pet Services
      </h5>
      <p class="text-justify mt-4">
        <span class="text-blue-900 font-extrabold">Tenang! </span>
        Ketika pergi ke luar negeri atau ke luar kota dalam waktu yang lama,
        memang tidak mungkin bagi kita untuk membawa Anabul kesayangan turut
        serta. Takutnya nih, bisa stres kalau kelamaan di jalan.. Nah, di sisi
        lain meninggalkan mereka di rumah sendiri juga tidak membuat kita lebih
        tenang. Meski dititipkan kepada tetangga atau teman, belum tentu, kan,
        perawatan yang diberikan sesuai dengan standar pemiliknya.
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>


