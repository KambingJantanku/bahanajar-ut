Vue.component('do-tracking', {
  template: '#tpl-do-tracking',
  props: ['data'],
  data() {
    return { search: '', activeSearch: '' };
  },
  computed: {
    filteredList() {
      const q = this.activeSearch.trim().toLowerCase();
      if (!q) return this.data.trackingList;
      return this.data.trackingList.filter(item =>
        item.no.toLowerCase().includes(q) || (item.data.nim || '').toLowerCase().includes(q)
      );
    }
  },
  watch: {
    // Watcher 2: pantau input pencarian, auto-reset bila dikosongkan
    search(val) { if (val === '') this.activeSearch = ''; }
  },
  methods: {
    execSearch() { this.activeSearch = this.search; },
    resetSearch() { this.search = ''; this.activeSearch = ''; }
  }
});
