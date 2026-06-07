// Vue Filters
Vue.filter('rupiah', v => 'Rp ' + Number(v || 0).toLocaleString('id-ID'));
Vue.filter('satuan', v => `${Number(v || 0)} buah`);

new Vue({
  el: '#app',
  data: { tab: 'stok', loading: true, data: { upbjjList: [], kategoriList: [], pengirimanList: [], paket: [], stok: [], trackingList: [] } },
  async mounted() {
    try {
      this.data = await window.ApiService.fetchData();
    } catch (e) {
      alert('Gagal memuat data: ' + e.message);
    } finally {
      this.loading = false;
    }
  },
  methods: {
    updateStok({ item, editing, deleting }) {
      if (deleting) {
        this.data.stok = this.data.stok.filter(s => s.kode !== item.kode);
      } else if (editing) {
        const idx = this.data.stok.findIndex(s => s.kode === item.kode);
        if (idx >= 0) this.$set(this.data.stok, idx, item);
      } else {
        if (this.data.stok.some(s => s.kode === item.kode)) { alert('Kode sudah ada'); return; }
        this.data.stok.push(item);
      }
    }
  }
});
