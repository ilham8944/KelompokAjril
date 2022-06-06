import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const Materi = ({navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.text}>
          {/* <ScrollView> */}
          <Text style={styles.judul}>Pengertian Atom</Text>
          <Text style={styles.isi}>
          {'\t\t'}Konsep tentang atom pertama sekali dicetuskan oleh Demokritus, 
            menurut Demokritus semua dapat dipecahkan menjadi partikel terkecil, 
            dimana partikel-partikel tidak bisa lagi dibagi lebih lanjut disebut atom. 
            Atom berasal dari kata atomos, (a:tidak, tomos: memotong), 
            tidak dapat dipotong atau tidak dapat dibagi.(Petrucci,1996)
          </Text>

          <Text style={styles.judul}>Sejarah Model Atom</Text>
          <Text style={styles.isi}>
          {'\t\t'}Pengetahuan tentang atom terus menerus dikembangkan oleh para ilmuan, 
            sehingga sekarang sudah diketahui bagian dan peranannya masing-masing. 
            Ilmuan-ilmuan yang sangat berjasa dalam bidang ini adalah:
          </Text>

          <Text style={styles.point}>• Jhon Dalton (1760-1844)</Text>
          <Text style={styles.isi}>
          {'\t\t'}Jhon Dalton adalah seorang fisikawan Inggris, yang pada awal abad ke-19 mengemukakan gagasannya 
            tentang atom. Menurutnya atom-atom itu merupakan partikelpartikel yang tidak dapat dibagi lagi. 
            Atom suatu unsur sama segala sifatnya, sedangkan atom dari unsur yang berbada maka berlainan 
            dalam massa dan sifatnya. Setiap atom dapat membentuk molekul dan senyawa. Selanjutnya beliau juga 
            menegaskan bahwa suatu reaksi kimia hanya melibatkan penata ulang atom-atom, 
            sehingga tidak ada atom yang berubah akibat reaksi kimia.( Kartini, 2000). 
          </Text>

          <Text style={styles.point}>• Joseph Jhon Thomson </Text>
          <Text style={styles.isi}>
          {'\t\t'}J.J Thomson adalah fisikawan bangsa Amerika, beliau mengemukakan teorinya bahwa atom 
          memiliki muatan positif yang terbagi merata keseluruh isi atom. Muatan ini dinetralka 
          n oleh elektron-elektron yang tersebar diantara muatan tersebut.  Keadaannya mirip roti kismis, 
          dimana elektron diumpamakan sebagai kismis yang tersebar dalam seluruh bagian dari roti. (Rahmawati,2007).
          </Text>

          <Text style={styles.point}>• Rutherford (1871-1937)</Text>
          <Text style={styles.isi}>
          {'\t\t'}Rutherford adalah seorang ilmuan fisika yang berkecimpung dalam masalah atom, 
          ia telah berhasil menemukan bukti bahwa dalam atom terdapat inti atom yang bermuatan 
          positif yang berukuran jauh lebih kecil dari ukuran atom, tetapi massa atom hampir 
          seluruhnya berasal dari massa intinya. Berdasarkan temuannya tersebut, 
          Rutherford menyusun modelatom dan memperbaiki model atom Thomson. 
          Model atom Rutherford mengambarkan atom terdiri atas inti yang 
          bermuatan positif dan berada pada pusat atom, 
          serta elektron bergerak melintasi inti separti halnya planet-planet mengitari matahari.
          </Text>

          <Text style={styles.point}>• Niels Bohr</Text>
          <Text style={styles.isi}>
          {'\t\t'}Kegagalan model atom Rutherford adalah ketidakmampuannya menerangkan mengapa elektron dapat berputar disekeliling inti tanpa ditarik oleh inti sehingga bergabung. 
          Baru pada tahun 1913 Niels Bohr menyusun teori berdasarkan atom Rutherford dan teori kuantum, yaitu:
          </Text>
          <Text style={styles.hurufisi}>
            a. Atom terdiri dari inti yang bermuatan positif dan disekitarnya beredar elektronelektron yang bermuatan negatif.
          </Text>
          <Text style={styles.hurufisi}>
            b. Dalam atom, elektron beredar mengelilingi inti atom pada orbit tertentu yang dikenal sebagai keadaan gerakan yang stasioner yang selanjutnya disebut dengan tingkat energi utama atau bilangan kuantum atau kulit (n).          
          </Text>
          <Text style={styles.hurufisi}>
            c. Sepanjang elektron berada dalam lintasan stasioner energi akan konstan, sehingga tidak ada cahaya yang dipancarkan.
          </Text>
          <Text style={styles.hurufisi}>
            d. Elektron hanya dapat berpindah dari lintasan stasioner yang lebih rendah ke yang lebih tinggi jika menyerap energi. Dan sebaliknya, jika elektron berpindah dari lintasan stasioner yang tinggi ke yang rendah terjadi pembebasan energi.(Michel, 1999).           
          </Text>

          <Text style={styles.isi}>
          Elektron-elektron tersebut bergerak mengelilingi inti yang terbagi atas beberapa kulit, seperti terlihat pada tabel di bawah ini:
          </Text>

          <View style={styles.gambar}>
            <Image 
                source= {require ('../images/table1.png')}
                style={{
                    width: 340,
                    height: 170,
                    resizeMode: 'contain',
            }}/>
          </View>
          
          <Text style={styles.isi}>
          {'\t\t'}Nomor kulit dan nama kulit dari suatu atom sering disebut dengan bilangan kuantum, 
          tiap-tiap kulit dibagi dalam sub kulit seperti yang terlihat pada tabel di atas. 
          Masing-masing kulit dapat mempunyai elektron maksimum sebesar 2n2, dimana n adalah bilangan 
          kuantum, tetapi harus didasari pada azas Pauli. Azas Pauli mengatakan bahwa tidak mungkin 
          ada dua elektron yang memiliki lintasan-lintasan dengan bilangan-bilangan kuantum yang tetap 
          sama. Banyaknya electron yang diperkenankan dari masing-masing sub adalah: untuk s = 2 
          elektron, p=6 elektron, untuk d=10 elektron dan f=14 elektron. Namun walaupun demikian teori 
          Niels Bohr juga masih memiliki banyak kelemahan, 
          yaitu: Bohr hanya dapat menerangkan spectrum dari atom yang mengandung satu elektron dan tidak sesuai dengan spectrum atom berelektron banyak. Selain itu dia tidak mampu pula menerangkan atom dapat membentuk molekul melalui ikatan kimia.
          </Text>

          <Text style={styles.isi}>
          {'\t\t'}Partikel dasar adalah partikel-partikel pembentuk atom yang terdiri dari elektron, proton dan neutron. 
          </Text>
          <Text style={styles.isi}>
            1) Elektron adalah partikel pembentuk atom yang terletak di luar inti atom dan tidak memiliki massa dan bermuatan negatif, 
          </Text>
          <Text style={styles.isi}>
            2) Proton adalah partikel pembentuk atom yang terletak di dalam inti atom dan mempunyai massa 1 dan bermuatan positif, 
          </Text>
          <Text style={styles.isi}>
            3) Neutron adalah partikel pembentuk atom yang terletak di dalam inti atom memiliki massa 1 dan netral.
          </Text>

          <Text style={styles.isi}>
          {'\t\t'}Konfigurasi elektron adalah susunan elektron-elektron yang bergerak pada lintasan tertentu. 
            Elektron bergerak mengelilingi inti atom pada masing-masing orbitnya yang dikenal 
            sebagai kulit elektron. Jumlah kulit elektron pada tabel periodik unsur sesuai
            dengan nomor periode unsur atom tersebut, 
            sedangkan jumlah seluruh elektron sama dengan nomor atomnya.
          </Text>

          <Text style={styles.isi}>
          [1]   Sabarni.2019. Struktur Atom Berdasarkan Ilmu Kimia Dan Perspektif Al-Quran. Lantanida Journal, vol. 7, no. 1, 2019.
          </Text>

          <Text>Tingkat reaktifnya</Text>
          <Text style={styles.isigambar}>
          Jari-jari atom: Jari-jari atom merupakan suatu besaran yang sulit diukur, apabila dilakukan beberapa percobaan maka nilai jari-jari yang dihasilkan akan berbeda. 
          Gambar 8.3 memperlihatkan ketergantungan jari-jari khas atom pada Z (nomor atom).
          </Text>
          
          <View style={styles.gambar}>
            <Image 
                source= {require ('../images/gambar3.png')}
                style={{
                    width: 340,
                    height: 170,
                    resizeMode: 'contain',
            }}/>
          </View>
          
          <Text style={styles.isigambar}>
            Energi ionisasi: Energi minimun yang diperlukan untuk membebaskan sebuah elektron dari atomnya. Gambar 8.4
            menunjukkan ketergantungan energi ionisasi pada bilangan atom Z.
          </Text>

          <View style={styles.gambar}>
            <Image 
                source= {require ('../images/gambar4.png')}
                style={{
                    width: 340,
                    height: 170,
                    resizeMode: 'contain',
            }}/>
          </View>

          <Text style={styles.isigambar}>
            Resistivitas elektrik: sifat khas bahan untuk menahan aliran arus.
            Gambar 8.5 memprlihatkan ketergantungan resistivitas elektrik pada nomor atom
          </Text>

          <View style={styles.gambar}>
            <Image 
                source= {require ('../images/gambar5.png')}
                style={{
                    width: 340,
                    height: 170,
                    resizeMode: 'contain',
            }}/>
          </View>

          <Text style={styles.isi}>
          Suseptibilitas magnet x: tingkat kemagnetan suatu bahan untuk termagnetisasi.
          </Text>

          <Text style={styles.isi}>
          Paramagnetik x {'>'} 0 ; diamgnetik x {'<'} 0 ; ferromagnetik x tidak terdefinisikan, akan tetap bersifat magnet meskipun medan magnet dihilangkan
          </Text>

          <Text style={{textAlign:'justify',marginBottom:-10}}>
          Gambar 8.6 meperlihatkan suseptibilitas magnet beberapa unsur
          </Text>

          <View style={styles.gambar}>
            <Image 
                source= {require ('../images/gambar5.png')}
                style={{
                    width: 340,
                    height: 170,
                    resizeMode: 'contain',
            }}/>
          </View>

          {/* <StatusBar style="auto" /> */}
          
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>

  );
}
export default Materi;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', //#D9D2C5
    // alignItems:'flex-start',
    // justifyContent: 'flex-start',
    textAlign:'right',
    
  },

  text: {
    margin:25,
  },

  judul: {
    fontWeight:'bold',
    fontSize:18,
    // marginBottom:5,
  },

  isi: {
    textAlign:'justify',
    marginBottom:10,
  },

  point: {
    fontWeight:'bold',
    fontSize:16,
    marginLeft:10
  },
  isipoint:{
    textAlign:'justify',
    marginBottom:10,
    marginLeft:10
  },

  hurufisi: {
    textAlign:'justify',
    marginBottom:10,
    marginLeft:10
  },

  gambar: {
    alignItems:'center',
  },

  isigambar: {
    textAlign:'justify',
    marginBottom:-10
  },
});
