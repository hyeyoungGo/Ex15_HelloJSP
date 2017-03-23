/**
 * 
 */
function sendIt(){
	// 아이디 입력여부 검사
	if(document.formCheck.id.value=="") {
		 alert("아이디를 입력하지 않았습니다.")
		 document.formCheck.id.focus()
		 return
	}
	// 아이디 유효성 검사 (영문소문자, 숫자만 허용)
	for (i=0;i<document.formCheck.id.value.length ;i++ ) {
	 ch=document.formCheck.id.value.charAt(i)
		 if (!(ch>='0' && ch<='9') && !(ch>='a' && ch<='z')) {
			  alert ("아이디는 소문자, 숫자만 입력가능합니다.")
			  document.formCheck.id.focus()
			  document.formCheck.id.select()
			  return
		  }
	}
	// 아이디에 공백 사용하지 않기
	if (document.formCheck.id.value.indexOf(" ")>=0) {
		 alert("아이디에 공백을 사용할 수 없습니다.")
		 document.formCheck.id.focus()
		 document.formCheck.id.select()
		 return
	}
	// 아이디 길이 체크 (6~12자)
	if (document.formCheck.id.value.length<6 || document.formCheck.id.value.length>12) {
		 alert ("아이디를 6~12자까지 입력해주세요.")
		 document.formCheck.id.focus()
		 document.formCheck.id.select()
		 return
	}
	// 비밀번호 입력여부 체크
	if(document.formCheck.pw1.value=="") {
		 alert("비밀번호를 입력하지 않았습니다.")
		 document.formCheck.pw1.focus()
		 return
	}
	// 비밀번호 길이 체크(4~8자 까지 허용)
	if (document.formCheck.pw1.value.length<4 || document.formCheck.pw1.value.length>8) {
		 alert ("비밀번호를 4~8자까지 입력해주세요.")
		 document.formCheck.pw1.focus()
		 document.formCheck.pw1.select()
		 return
	}
	
	// 비밀번호와 비밀번호 확인 일치여부 체크
	if (document.formCheck.pw1.value!=document.formCheck.pw2.value) {
		 alert("비밀번호가 일치하지 않습니다")
		 document.formCheck.pw1.value=""
		 document.formCheck.pw2.value=""
		 document.formCheck.pw1.focus()
		 return
	}
	// 주민번호 오류 검사
	/*
	 * str1=document.formCheck.sn1.value str2=document.formCheck.sn2.value str=str1+str2 hap=0
	 * hap=hap+parseInt(str.charAt(0))*2 hap=hap+parseInt(str.charAt(1))*3
	 * hap=hap+parseInt(str.charAt(2))*4 hap=hap+parseInt(str.charAt(3))*5
	 * hap=hap+parseInt(str.charAt(4))*6 hap=hap+parseInt(str.charAt(5))*7
	 * hap=hap+parseInt(str.charAt(6))*8 hap=hap+parseInt(str.charAt(7))*9
	 * hap=hap+parseInt(str.charAt(8))*2 hap=hap+parseInt(str.charAt(9))*3
	 * hap=hap+parseInt(str.charAt(10))*4 hap=hap+parseInt(str.charAt(11))*5
	 * z=(hap%11) z=11-z if (z==10) {z=0} if (z==11) {z=1} if
	 * (z!=parseInt(str.charAt(12))) { alert ("틀린 주민등록번호입니다.") return }
	 */
	ju1=document.formCheck.sn1.value
	ju2=document.formCheck.sn2.value
	jumin=ju1+ju2
	key="234567892345"
	sum=0
	for (i=0;i<key.length ;i++ ) {
		sum+=parseInt(jumin.charAt(i))*parseInt(key.charAt(i))
	}
	na=(11-(sum%11))%10
	if (jumin.charAt(12)!=na) {
		 alert("틀린 주민등록번호입니다.")
		 document.formCheck.sn1.value=""
		 document.formCheck.sn2.value=""
		 document.formCheck.sn1.focus()
		 return
	}
	// 성별 체크 유무 확인
	if (document.formCheck.se[0].checked==false && document.formCheck.se[1].checked==false) {
		 alert("성별을 체크해 주세요")
		 return
	}
	document.formCheck.submit()
}
