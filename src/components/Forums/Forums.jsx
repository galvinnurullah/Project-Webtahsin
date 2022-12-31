import React from "react";
import "./forums.css";
import Logo from "../../assests/images/Hasbi.jpg";
import Logos from "../../assests/images/Foto Formal.JPG";
import Logo2 from "../../assests/images/ngajianak.jpg";
const Forums = () => {
    return (<>
    <div class="container-fluid mt-100">
     <div class="row">
         <div class="col-md-14">
             <div class="card mb-3">
                 <div class="card-header">
                     <div class="media flex-wrap w-100 align-items-center"> <img src={Logo} class="d-block ui-w-40 rounded-circle" alt=""/>
                         <div class="media-body ml-3"> <a href="instagram.com/hasbee1453" data-abc="true">Hasbi-Desu</a>
                         </div>
                     </div>
                 </div>
                 <div class="card-body">
                     <p> Kang punten mau nanya, Apakah Bisa Belajar Tajwid Menggunakan Metode Interpolasi Newton ? Terus apakah Grafik sqrt(cos(x))*cos(300x)+sqrt(abs(x))-0.7)*(4-x*x)^0.01,sqrt(6-x^2),-sqrt(6-x^2)from -4.5 to 4.5 bisa direpresentasikan dalam kehidupan nyata ? Mohon jawabannya....
                     </p>
                 </div>
                 <div class="card-footer d-flex flex-wrap justify-content-between align-items-center px-0 pt-0 pb-3">
                     <div class="px-4 pt-3"> <a href="instagram.com/hasbee1453" class="text-muted d-inline-flex align-items-center align-middle" data-abc="true"> <i class="fa fa-heart text-danger"></i>&nbsp; <span class="align-middle">445</span> </a> <span class="text-muted d-inline-flex align-items-center align-middle ml-4"> <i class="fa fa-eye text-muted fsize-3"></i>&nbsp; <span class="align-middle">14532</span> </span> </div>
                     <div class="px-4 pt-3"> <button type="button" class="btn btn-primary"><i class="ion ion-md-create"></i>&nbsp; Reply</button> </div>
                 </div>
             </div>
         </div>
     </div>
 </div>
 <div class="container-fluid mt-100">
            <div class="d-flex flex-wrap justify-content-between">
               <div>
                  <button type="button" class="btn btn-shadow btn-wide btn-primary">
                  <span class="btn-icon-wrapper pr-2 opacity-7">
                  <i class="fa fa-plus fa-w-20"></i>
                  </span>
                  New thread
                  </button>
               </div>
               <div class="col-12 col-md-3 p-0 mb-3">
                  <input type="text" class="form-control" placeholder="Search..."/>
               </div>
            </div>
            <div class="card mb-3">
               <div class="card-header pl-0 pr-0">
                  <div class="row no-gutters w-100 align-items-center">
                     <div class="col ml-3">Topics</div>
                     <div class="col-4 text-muted">
                        <div class="row no-gutters align-items-center">
                           <div class="col-4">Replies</div>
                           <div class="col-8">Last update</div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="card-body py-3">
                  <div class="row no-gutters align-items-center">
                     <div class="col">
                        <a href="javascript:void(0)" class="text-big" data-abc="true">Perlakuanku padamu samar seperti alif lam syamsyiah, namun pengakuan cintaku di depan tuhanku jelas seperti alif lam komariah, maukah kau menungguku sehingga aku dapat mengikrarkannya di depanmu dan di depan tuhanku?</a>
                        <div class="text-muted small mt-1">Started 25 days ago &nbsp;&middot;&nbsp; <a href="{javascript:void(0)}" class="text-muted" data-abc="true">Razif Afgan</a></div>
                     </div>
                     <div class="d-none d-md-block col-4">
                        <div class="row no-gutters align-items-center">
                           <div class="col-4">12</div>
                           <div class="media col-8 align-items-center">
                              <img src= {Logos} alt="" class="d-block ui-w-30 rounded-circle"/>
                              <div class="media-body flex-truncate ml-2">
                                 <div class="line-height-1 text-truncate">1 day ago</div>
                                 <a href="javascript:void(0)" class="text-muted small text-truncate" data-abc="true">by Razif Comp</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <hr class="m-0"/>
               <div class="card-body py-3">
                  <div class="row no-gutters align-items-center">
                     <div class="col">
                        <a href="javascript:void(0)" class="text-big" data-abc="true">Bisakah membaca al-Quran tanpa belajar Ilmu Tajwid?</a>
                        <span class="badge badge-success align-text-bottom ml-1">Solved</span>
                        <div class="text-muted small mt-1">Started 5 days ago &nbsp;&middot;&nbsp; <a href="javascript:void(0)" class="text-muted" data-abc="true">Ihsan Brigez</a></div>
                     </div>
                     <div class="d-none d-md-block col-4">
                        <div class="row no-gutters align-items-center">
                           <div class="col-4">43</div>
                           <div class="media col-8 align-items-center">
                              <img src={Logos} alt="" class="d-block ui-w-30 rounded-circle"/>
                              <div class="media-body flex-truncate ml-2">
                                 <div class="line-height-1 text-truncate">1 day ago</div>
                                 <a href="javascript:void(0)" class="text-muted small text-truncate" data-abc="true">by Sunny-Kun</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <hr class="m-0"/>
               <div class="card-body py-3">
                  <div class="row no-gutters align-items-center">
                     <div class="col">
                        <a href="javascript:void(0)" class="text-big" data-abc="true">Bagaimana sejarah berkembangnya Ilmu Tajwid ?</a>
                        <span class="badge badge-default align-text-bottom ml-1">Locked</span>
                        <div class="text-muted small mt-1">Started 21 days ago &nbsp;&middot;&nbsp; <a href="javascript:void(0)" class="text-muted" data-abc="true">Dhika XTC</a></div>
                     </div>
                     <div class="d-none d-md-block col-4">
                        <div class="row no-gutters align-items-center">
                           <div class="col-4">42</div>
                           <div class="media col-8 align-items-center">
                              <img src={Logos} alt="" class="d-block ui-w-30 rounded-circle"/>
                              <div class="media-body flex-truncate ml-2">
                                 <div class="line-height-1 text-truncate">2 day ago</div>
                                 <a href="javascript:void(0)" class="text-muted small text-truncate" data-abc="true">by Dhika-Chan</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <hr class="m-0"/>
               <div class="card-body py-3">
                  <div class="row no-gutters align-items-center">
                     <div class="col">
                        <a href="javascript:void(0)" class="text-big" data-abc="true">Apakah ilmu tajwid bisa digunakan untuk membaca kitab injil ?</a>
                        <div class="text-muted small mt-1">Started 56 days ago &nbsp;&middot;&nbsp; <a href="javascript:void(0)" class="text-muted" data-abc="true">Abdullah Alex</a></div>
                     </div>
                     <div class="d-none d-md-block col-4">
                        <div class="row no-gutters align-items-center">
                           <div class="col-4">632</div>
                           <div class="media col-8 align-items-center">
                              <img src={Logos} alt="" class="d-block ui-w-30 rounded-circle"/>
                              <div class="media-body flex-truncate ml-2">
                                 <div class="line-height-1 text-truncate">11 day ago</div>
                                 <a href="javascript:void(0)" class="text-muted small text-truncate" data-abc="true">by Mualaf Center</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <hr class="m-0"/>
               <div class="card-body py-3">
                  <div class="row no-gutters align-items-center">
                     <div class="col">
                        <a href="javascript:void(0)" class="text-big" data-abc="true">Bapak siapa yang ada di belakang buku Iqro ?</a>
                        <span class="badge badge-secondary align-text-bottom ml-1">Closed</span>
                        <div class="text-muted small mt-1">Started 25 days ago &nbsp;&middot;&nbsp; <a href="javascript:void(0)" class="text-muted" data-abc="true">Asep Abraham</a></div>
                     </div>
                     <div class="d-none d-md-block col-4">
                        <div class="row no-gutters align-items-center">
                           <div class="col-4">53</div>
                           <div class="media col-8 align-items-center">
                              <img src={Logos} alt="" class="d-block ui-w-30 rounded-circle"/>
                              <div class="media-body flex-truncate ml-2">
                                 <div class="line-height-1 text-truncate">1 day ago</div>
                                 <a href="javascript:void(0)" class="text-muted small text-truncate" data-abc="true">by Abraham Newton</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <hr class="m-0"/>
               <div class="card-body py-3">
                  <div class="row no-gutters align-items-center">
                     <div class="col">
                        <a href="javascript:void(0)" class="text-big" data-abc="true">Apa hukumnya membaca Qur'an di diskotik ?</a>
                        <span class="badge badge-danger align-text-bottom ml-1">Hot!</span>
                        <div class="text-muted small mt-1">Started 25 days ago &nbsp;&middot;&nbsp; <a href="javascript:void(0)" class="text-muted" data-abc="true">Eka Saputri</a></div>
                     </div>
                     <div class="d-none d-md-block col-4">
                        <div class="row no-gutters align-items-center">
                           <div class="col-4">12</div>
                           <div class="media col-8 align-items-center">
                              <img src={Logos} alt="" class="d-block ui-w-30 rounded-circle"/>
                              <div class="media-body flex-truncate ml-2">
                                 <div class="line-height-1 text-truncate">1 day ago</div>
                                 <a href="javascript:void(0)" class="text-muted small text-truncate" data-abc="true">by Eka Corps</a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <nav>
               <ul class="pagination mb-5">
                  <li class="page-item disabled"><a class="page-link" href="javascript:void(0)" data-abc="true">&laquo;</a></li>
                  <li class="page-item active"><a class="page-link" href="javascript:void(0)" data-abc="true">1</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0)" data-abc="true">2</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0)" data-abc="true">3</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0)" data-abc="true">&raquo;</a></li>
               </ul>
            </nav>
   </div>
   <section class="container"/>
	<div class="row">
		<div class="col-lg-9 col-12">
		<h3 class="border-bottom mb-4">&nbsp;
			<a href="./" class="btn btn-success btn-sm float-right"><i class="fas fa-arrow-left"></i> Discussion List</a>
		</h3>
		<h3>Apa yang Anda pikirkan ?</h3>
		<hr class="border-secondary mb-4" />
				
		<div class="card">
		  <div class="card-header">
		    Journey to The Almighty
		  </div>
		  <div class="card-body">
		    <div class="row">
				<div class="col-sm-2">
				  	<a href="#">
				  		<img class="mr-3 rounded img-thumbnail" src={Logo2} alt="Generic placeholder image"/>
				  	</a>
				  	<h6 class="mt-2"><a href="#">Mufti Menk</a></h6>
				  	<small class="text-muted">Hamba Allah</small>
				 </div>
				  <div class="col-sm-9 border-left border-secondary">
				    <p>“Lebih baik kehilangan sesuatu demi Tuhan. Daripada harus kehilangan Tuhan hanya demi mendapatkan sesuatu,”</p>
				  </div>
			</div>
		  </div>
		  <div class="card-footer text-muted">
		  	1 Hours ago
		  </div>
		</div>
		<hr class="border-danger mb-4 mt-4" />
				
		<div class="card">
		  <div class="card-header">
		    Ikhlash
		  </div>
		  <div class="card-body">
		    <div class="row">
				<div class="col-sm-2">
				  	<a href="#">
				  		<img class="mr-3 rounded img-thumbnail" src={Logo2} alt="Generic placeholder image"/>
				  	</a>
				  	<h6 class="mt-2"><a href="#">Ibnu Qoyyim</a></h6>
				  	<small class="text-muted">Hamba Allah</small>
				 </div>
				  <div class="col-sm-9 border-left border-secondary">
				    <p>"Orang yang ikhlas adalah orang yang menyembunyikan perbuatan baiknya sebagaimana ia menyembunyikan perbuatan jahatnya."</p>
				  </div>
			</div>
		  </div>
		  <div class="card-footer text-muted">
		  	2 Hours ago
		  </div>
		</div>
		<hr class="border-danger mb-4 mt-4" />
				
		<div class="card">
		  <div class="card-header">
		    Tanggung Jawab
		  </div>
		  <div class="card-body">
		    <div class="row">
				<div class="col-sm-2">
				  	<a href="#">
				  		<img class="mr-3 rounded img-thumbnail" src={Logo2} alt="Generic placeholder image"/>
				  	</a>
				  	<h6 class="mt-2"><a href="#">Peter Parker</a></h6>
				  	<small class="text-muted">Spider-Verse</small>
				 </div>
				  <div class="col-sm-9 border-left border-secondary">
				    <p>"From a Great Power Comes Great Responsibility"</p>
				  </div>
			</div>
		  </div>
		  <div class="card-footer text-muted">
		  	3 Hours ago
		  </div>
		</div>
		<hr class="border-danger mb-4 mt-4" />
				
		<div class="card">
		  <div class="card-header">
		    Sabar dan Ikhlash
		  </div>
		  <div class="card-body">
		    <div class="row">
				<div class="col-sm-2">
				  	<a href="#">
				  		<img class="mr-3 rounded img-thumbnail" src={Logo2} alt="Generic placeholder image"/>
				  	</a>
				  	<h6 class="mt-2"><a href="#">Hasna</a></h6>
				  	<small class="text-muted">Mahasiswa UNJ</small>
				 </div>
				  <div class="col-sm-9 border-left border-secondary">
				    <p>"Bukanlah kesabaran jika masih mempunyai batas dan bukanlah keikhlasan jika masih merasakan sakit."</p>
				  </div>
			</div>
		  </div>
		  <div class="card-footer text-muted">
		  	4 Hours Ago
		  </div>
		</div>
		<hr class="border-danger mb-4 mt-4" />
				
		<div class="card">
		  <div class="card-header">
		    Chill Broo
		  </div>
		  <div class="card-body">
		    <div class="row">
				<div class="col-sm-2">
				  	<a href="#">
				  		<img class="mr-3 rounded img-thumbnail" src={Logo2} alt="Generic placeholder image"/>
				  	</a>
				  	<h6 class="mt-2"><a href="#">Khalil Gibran</a></h6>
				  	<small class="text-muted">Budak Asmara</small>
				 </div>
				  <div class="col-sm-9 border-left border-secondary">
				    <p>"Jika kau mencintai seseorang, biarkan ia pergi. Kalau ia kembali, ia adalah milikmu. Bila tidak, ia memang tidak pernah jadi milikmu." </p>
				  </div>
			</div>
		  </div>
		  <div class="card-footer text-muted">
		  	5 Hours Ago
		  </div>
		</div>
		<hr class="border-danger mb-4 mt-4" />
				
		<div class="card">
		  <div class="card-header">
		    nda usah khawatir
		  </div>
		  <div class="card-body">
		    <div class="row">
				<div class="col-sm-2">
				  	<a href="#">
				  		<img class="mr-3 rounded img-thumbnail" src={Logo2} alt="Generic placeholder image"/>
				  	</a>
				  	<h6 class="mt-2"><a href="#">Zeus</a></h6>
				  	<small class="text-muted">Tukang PLN</small>
				 </div>
				  <div class="col-sm-9 border-left border-secondary">
				    <p>"Ku titipkan cinta ini hanya pada-Mu, jagalah hatiku dan hatinya dari rasa kecewa, hingga waktu itu tiba. Persatukanlah kami dalam restu dan rida-Mu."</p>
				  </div>
			</div>
		  </div>
		  <div class="card-footer text-muted">
		  	6 Hours Ago
		  </div>
		</div>
		<hr class="border-danger mb-4 mt-4" />
				
		<div class="card">
		  <div class="card-header">
		    Nikah
		  </div>
		  <div class="card-body">
		    <div class="row">
				<div class="col-sm-2">
				  	<a href="#">
				  		<img class="mr-3 rounded img-thumbnail" src={Logo2} alt="Generic placeholder image"/>
				  	</a>
				  	<h6 class="mt-2"><a href="#">Jofisa</a></h6>
				  	<small class="text-muted">sadboy</small>
				 </div>
				  <div class="col-sm-9 border-left border-secondary">
				    <p>"Tidak ada solusi yang lebih baik bagi dua insan yang saling mencintai dibanding pernikahan."</p>
				  </div>
			</div>
		  </div>
		  <div class="card-footer text-muted">
		  	7 Hours Ago
		  </div>
		</div>
		<hr class="border-danger mb-4 mt-4" />
				
		<div class="card">
		  <div class="card-header">
		    Come or Go
		  </div>
		  <div class="card-body">
		    <div class="row">
				<div class="col-sm-2">
				  	<a href="#">
				  		<img class="mr-3 rounded img-thumbnail" src={Logo2} alt="Generic placeholder image"/>
				  	</a>
				  	<h6 class="mt-2"><a href="#">Todoroki Shoto</a></h6>
				  	<small class="text-muted">Panas Dingin</small>
				 </div>
				  <div class="col-sm-9 border-left border-secondary">
				    <p>"Cinta itu antara menghalalkan dan meninggalkan karena Tuhan, atau tetap bertahan dalam sebuah kemaksiatan."</p>
				  </div>
			</div>
		  </div>
		  <div class="card-footer text-muted">
		  	8 Hpurs Ago
		  </div>
		</div>
		<hr class="border-danger mb-4 mt-4" />
				
		<div class="card">
		  <div class="card-header">
		    Jenis Sabar
		  </div>
		  <div class="card-body">
		    <div class="row">
				<div class="col-sm-2">
				  	<a href="#">
				  		<img class="mr-3 rounded img-thumbnail" src={Logo2} alt="Generic placeholder image"/>
				  	</a>
				  	<h6 class="mt-2"><a href="#">Ali Bin Abi Thalib</a></h6>
				  	<small class="text-muted">Number 4</small>
				 </div>
				  <div class="col-sm-9 border-left border-secondary">
				    <p>"Kesabaran itu ada dua macam: Sabar atas sesuatu yang tidak kau inginkan dan sabar menahan diri dari sesuatu yang tidak kau ingin dan sabar menahan diri dari sesuatu yang kau ingini."</p>
				  </div>
			</div>
		  </div>
		  <div class="card-footer text-muted">
		  	9 Hours Ago
		  </div>
		</div>
		<hr class="border-danger mb-4 mt-4" />
				
		<div class="card">
		  <div class="card-header">
		    Take a deep Breath
		  </div>
		  <div class="card-body">
		    <div class="row">
				<div class="col-sm-2">
				  	<a href="#">
				  		<img class="mr-3 rounded img-thumbnail" src={Logo2} alt="Generic placeholder image"/>
				  	</a>
				  	<h6 class="mt-2"><a href="#">Abdullah Alex</a></h6>
				  	<small class="text-muted">Pemuja Senja</small>
				 </div>
				  <div class="col-sm-9 border-left border-secondary">
				    <p>"Ketika kamu tidak mengerti apa yang terjadi dalam hidupmu, tutup saja mata kamu, tarik napas dalam-dalam dan katakan,"Ya Allah, aku tahu ini adalah rencana-Mu, bantu aku melewatinya."</p>
				  </div>
			</div>
		  </div>
		  <div class="card-footer text-muted">
		  	1 days ago
		  </div>
		</div>
		<hr class="border-danger mb-4 mt-4" />
				
		
		<h4 class="mb-4 mt-5 border-bottom shadow p-2">Add Reply</h4>
		<div class="table-responsive shadow-lg mt-4">
			<table class="table">
				<tbody>
					<tr>
						<th>Title</th>
						<td>
							<input type="text" name="_subject" class="form-control"/>
						</td>
					</tr>
					<tr>
						<th>Reply</th>
						<td>
							<textarea id="editor" name="_text" class="form-control" rows="10"></textarea>
						</td>
					</tr>
					<tr>
						<td colspan="2">
							<input type="submit" class="btn btn-danger" name="" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	
	<div class="col-lg-3 col-12">
	<div class="list-group mb-4 shadow">
		<li class="list-group-item list-group-item-info"><strong>Recent Discussion</strong></li>
		<a href="#" class="list-group-item list-group-item-action">JOURNEY TO THE ALMIGHTY <span class="float-right badge badge-primary">123</span></a>
		<a href="#" class="list-group-item list-group-item-action">IKHLASH <span class="float-right badge badge-primary">123</span></a>
		<a href="#" class="list-group-item list-group-item-action">TANGGUNG JAWAB <span class="float-right badge badge-primary">123</span></a>
		<a href="#" class="list-group-item list-group-item-action">JENIS SABAR <span class="float-right badge badge-primary">123</span></a>
		<a href="#" class="list-group-item list-group-item-action">COME OR GO <span class="float-right badge badge-primary">123</span></a>
		<a href="#" class="list-group-item list-group-item-action">TAKE A DEEP BREATH <span class="float-right badge badge-primary">123</span></a>
	</div>
	
	<div class="list-group mb-4 shadow">
		<li class="list-group-item list-group-item-info"><strong>Recent Users</strong></li>
		<a href="#" class="list-group-item list-group-item-action">Razif Afgan <span class="float-right badge badge-info">123</span></a>
		<a href="#" class="list-group-item list-group-item-action">Ihsan Brigez <span class="float-right badge badge-info">123</span></a>
		<a href="#" class="list-group-item list-group-item-action">Dhika XTC <span class="float-right badge badge-info">123</span></a>
		<a href="#" class="list-group-item list-group-item-action">Abdullah Alex <span class="float-right badge badge-info">123</span></a>
		<a href="#" class="list-group-item list-group-item-action">Hasbi-Desu <span class="float-right badge badge-info">123</span></a>
		<a href="#" class="list-group-item list-group-item-action">Eka Saputri <span class="float-right badge badge-info">123</span></a>
	</div>
</div>	
	</div>
 </>
    );
};
    
export default Forums;