Vue.component('stock-table', {
  template: '#tpl-stock-table',
  props: ['data'],
  data() {
    return {
      filterUpbjj: '',
      filterKategori: '',
      reorderOnly: false,
      sortKey: 'judul',
      sortAsc: true,
      showForm: false,
      editing: false,
      form: this.emptyForm(),
      deleteTarget: null,
    };
  },
  computed: {
    filteredSorted() {
      let list = this.data.stok.slice();
      if (this.filterUpbjj) list = list.filter(s => s.upbjj === this.filterUpbjj);
      if (this.filterKategori) list = list.filter(s => s.kategori === this.filterKategori);
      if (this.reorderOnly) list = list.filter(s => s.qty === 0 || s.qty < s.safety);
      const key = this.sortKey;
      list.sort((a, b) => {
        let va = a[key], vb = b[key];
        if (typeof va === 'string') { va = va.toLowerCase(); vb = vb.toLowerCase(); }
        if (va < vb) return this.sortAsc ? -1 : 1;
        if (va > vb) return this.sortAsc ? 1 : -1;
        return 0;
      });
      return list;
    }
  },
  watch: {
    // Watcher 1: reset kategori saat UPBJJ berubah / dikosongkan
    filterUpbjj(val) {
      if (!val) this.filterKategori = '';
    }
  },
  methods: {
    emptyForm() {
      return { kode: '', judul: '', kategori: 'MK Wajib', upbjj: 'Jakarta', lokasiRak: '', harga: 0, qty: 0, safety: 0, catatanHTML: '' };
    },
    openCreate() {
      this.editing = false;
      this.form = this.emptyForm();
      this.showForm = true;
    },
    openEdit(item) {
      this.editing = true;
      this.form = Object.assign({}, item);
      this.showForm = true;
    },
    saveStok() {
      if (!this.form.kode || !this.form.judul) { alert('Kode & Judul wajib diisi'); return; }
      this.$emit('update-stok', { item: Object.assign({}, this.form), editing: this.editing });
      this.showForm = false;
    },
    confirmDelete(item) { this.deleteTarget = item; },
    doDelete() {
      this.$emit('update-stok', { item: this.deleteTarget, deleting: true });
      this.deleteTarget = null;
    }
  }
});
