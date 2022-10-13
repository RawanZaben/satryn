import React from "react";
export default function Nav() {

    return (<>
<div>
	<div className="bg-white shadow">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-4">
        <div>
          <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">تسجيل دخول     </a>
          <a href="#" className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600">تسجيل جديد</a>          
        </div>

        <div className="hidden sm:flex sm:items-center">
        <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">اتصال بنا</a>
        <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">دوراتي </a>
        <a href="#" className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4">الرئسية</a>
        </div>

        <div className="hidden sm:flex sm:items-center">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU" className="w-10 h-10 text-purple-600" />
        </div>

      </div>
      
      
    </div>
  </div>
</div>
    
    </>
     
	);  
}