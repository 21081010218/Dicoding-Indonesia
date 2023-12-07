class Title extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section>
      <div class="title">
        <div tabindex="0" class="title__inner">
          <h1 class="title__apps">Selamat Bersantuiiii</h1>
          <p class="title__jargon">Kami menyajikan tempat-tempat yang cocok buat anda hangout dengan pasangan atau makan dengan keluarga</p>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define('title-resto', Title);
