const fs = require('fs');
const path = require('path');
const https = require('https');

// MASTER DATA: Aset Foto Produk E-Commerce & Hero (Theme: Warm Boutique)
const boutiqueAssets = {
  "hero": {
    "folder": "apps/web/public",
    "files": {
      "hero.jpg": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&h=900&auto=format&fit=crop"
    }
  },
  "products": {
    "folder": "apps/web/public/products",
    "files": {
      "linen-overshirt.jpg": "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=1000&h=1250&auto=format&fit=crop",
      "cotton-tee.jpg": "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1000&h=1250&auto=format&fit=crop",
      "cargo-pants.jpg": "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1000&h=1250&auto=format&fit=crop",
      "wool-coat.jpg": "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000&h=1250&auto=format&fit=crop",
      "kemeja-flanel.jpg": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000&h=1250&auto=format&fit=crop"
    }
  }
};

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(`Gagal dengan Status: ${response.statusCode}`);
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); 
      reject(err.message);
    });
  });
}

async function startBoutiqueDownload() {
  console.log('🛍️ [BOUTIQUE DOWNLOAD] Memulai instalasi foto produk & hero...');
  
  for (const [groupKey, config] of Object.entries(boutiqueAssets)) {
    const targetDir = path.join(__dirname, config.folder);
    
    // Otomatis membuat folder apps/web/public/products jika belum ada
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
      console.log(`📁 Membuat folder: ${config.folder}`);
    }

    console.log(`\n📥 Mengunduh aset: [${groupKey.toUpperCase()}]`);
    
    for (const [filename, url] of Object.entries(config.files)) {
      const destPath = path.join(targetDir, filename);
      try {
        await downloadImage(url, destPath);
        console.log(`   ✅ Tersimpan: ${config.folder}/${filename}`);
      } catch (err) {
        console.error(`   ❌ Gagal ${filename}: ${err}`);
      }
    }
  }
  
  console.log('\n===============================================================');
  console.log('🎉 PROSES SELESAI! Semua gambar produk & hero siap di-connect!');
  console.log('👉 Selanjutnya jalankan: npm run db:localimages -w apps/api');
  console.log('===============================================================');
}

startBoutiqueDownload();