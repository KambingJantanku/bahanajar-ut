// Service: fetch dataBahanAjar.json
window.ApiService = {
  async fetchData() {
    const res = await fetch('./data/dataBahanAjar.json');
    if (!res.ok) throw new Error('Gagal memuat data');
    const json = await res.json();
    // Normalize tracking (array of single-key objects) -> array of {no, data}
    json.trackingList = (json.tracking || []).map(obj => {
      const no = Object.keys(obj)[0];
      return { no, data: obj[no] };
    });
    return json;
  }
};
