Vue.component('order-form', {
  template: '#tpl-order-form',
  props: ['data'],
  data() {
    const now = new Date();
    const pad = n => String(n).padStart(2, '0');
    return {
      tanggalKirim: `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`,
      sequence: (this.data.trackingList ? this.data.trackingList.length : 0) + 1,
      form: { nim: '', nama: '', paketKode: '', pengiriman: 'REG' }
    };
  },
  computed: {
    nomorDO() {
      const year = new Date().getFullYear();
      return `DO${year}-${String(this.sequence).padStart(4, '0')}`;
    },
    selectedPaket() {
      return this.data.paket.find(p => p.kode === this.form.paketKode) || null;
    }
  },
  methods: {
    judulOf(kode) {
      const s = this.data.stok.find(x => x.kode === kode);
      return s ? s.judul : kode;
    },
    submit() {
      if (!this.form.nim || !this.form.nama || !this.form.paketKode) {
        alert('Lengkapi NIM, Nama, dan Paket'); return;
      }
      alert(`Order ${this.nomorDO} berhasil dibuat untuk ${this.form.nama}!`);
      this.sequence++;
      this.form = { nim: '', nama: '', paketKode: '', pengiriman: 'REG' };
    }
  }
});
