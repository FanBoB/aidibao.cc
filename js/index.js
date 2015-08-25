$(function(){
	// index弹出框 
	$('.popup').show();
	$('.close').click(function(){
		$('.popup').hide();
	})
	$('#fcb_start').click(function(){
		$('.popup').hide();
	})
	//  end  index弹出框
	
	//  二级菜单
	$('.zjf_region').mouseover(function(){
		$('.city').show();
	})
	$('.city').mouseout(function(){
		$(this).hide();
	})
	
	$('.city_bottom ul li').click(function(){
		var n = $(this).index();
		var txt = $(this).text();
		$('.zjf_region_span').text(txt);
		$('.city').hide();
	})

	$('.zjf_header_country').mouseover(function(){
		$('.country_two').show();
	})
	
	$('.country_two').mouseout(function(){
		$('.country_two').hide();
	});

	//  Tel验证
	$('.code b').click(function(){
		$('.code b').text("59秒后重新发送验证码")
	})
	//  end Tel验证

	//  nav  
	$('.menu_mid ul li a').hover(function(){
		$(this).addClass('active');
		$(this).addClass('active_ie6')
	},function(){
		$(this).removeClass('active');
		$(this).removeClass('active_ie6');
	})
	// end Nav

	//banner 
	var num = 0;
	var len = $('.zjf_banner .pic li').length;
	var timer = null;
	
	$('.zjf_banner').hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			num++;
			if(num>len-1){
				num = 0;
			}
			$('.zjf_banner .pic').animate({left:-num*996+'px'},400)
			$('.zjf_banner .banner_point li').eq(num).addClass('banner_active').siblings().removeClass('banner_active')
		},3000)
	}).trigger('mouseout')
	
	$('.zjf_banner .pic li').each(function(i,m){
		if(i == 0){
			$('.zjf_banner .banner_point').append($('<li class="banner_active"></li>'))
		}else{
			$('.zjf_banner .banner_point').append($('<li></li>'))
		}
				
	})
	
	$('.zjf_banner .banner_point li').mouseover(function(){
		clearInterval(timer)
		var n = $(this).index();
		$('.zjf_banner .banner_point li').eq(n).addClass('banner_active').siblings().removeClass('banner_active');
		num = n;
		$('.zjf_banner .pic').animate({left:-num*996+'px'},400)
	})
	
	$('.banner_left').click(function(){
		clearInterval(timer);
		num--;
		if(num<0){
			num = len-1;
		}
		$('.zjf_banner .pic').animate({left:-num*996+'px'},500)
		$('.zjf_banner .banner_point li').eq(num).addClass('banner_active').siblings().removeClass('banner_active')
	})
	$('.banner_right').click(function(){
		clearInterval(timer);
		num++;
		if(num>len-1){
			num = 0;
		}
		$('.zjf_banner .pic').animate({left:-num*996+'px'},500)
		$('.zjf_banner .banner_point li').eq(num).addClass('banner_active').siblings().removeClass('banner_active')
	})
	
	//  end banner

	//  sidbar
	$('.gdd_list li').click(function(){
		$('.gdd_list li a').removeClass('active');
		$('.gdd_list li em').removeClass('gdd_hover');
		
		var num = $(this).index();
		$('.gdd_list li em').eq(num).addClass('gdd_hover');
		$('.gdd_list li a').eq(num).addClass('active');
		
	})
	//  end sidbar

	//  底部弹出框
	$('.zjf_email_sub').click(function(){
		var vl = $('.email').val();
		if( vl=="" || ( vl!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(vl) )){
               $('.wtt_correctEmail').css('display','block')
        }else{
               $('.wtt_receive').css('display','block')
        }
	})
	
	$('.zjf_footer_email .wtt_close').click(function(){
		$('.wtt_receive').css('display','none')
	})
	$('.zjf_footer_email .wtt_btn').click(function(){
		$('.email').val("");
		$('.wtt_correctEmail').hide();
	})
	
	$('.zjf_text_sub').click(function(){
		var tl = $('.tel').val();
		if( tl=="" || ( tl!="" && !/^[1][3][0-9]{9}$/.test(tl) )){
            $('.wtt_correctPhone').css('display','block')
            return true;
        }else{
            $('.wtt_phone').css('display','block');
            return false;
        }
	})
	
	$('.zjf_footer_text .wtt_close').click(function(){
		$('.wtt_phone').css('display','none')
	})
	$('.zjf_footer_text .wtt_btn').click(function(){
		$('.tel').val("");
		$('.wtt_correctPhone').hide();
	})
	//  end　底部弹出框
	
	//　details　shopping
	$('.bobo_shop li').click(function(){
			var index = $(this).index();
			var l= $('.bobo_shop li a');
			l.removeClass('active').eq(index).addClass('active').siblings().removeClass('active');
	})
	// end　details　shopping
	
	//  CustomMade
	var tr = true;
	$('.lable em').click(function(){
		var ws = $(this).attr('class');
		if(ws=='checkbox_zhunbei'){
			$(this).attr('class','checkbox_active');
		}else{
			$(this).attr('class','checkbox_zhunbei');
		}
	})
	//  end CustomMade

	//  我的购物车全选
	$('.first_th1').click(function(){
		var th1 = $('.first_th1 em').attr('class');
		if(th1=='checkbox_zhunbei'){
			$('.first_th em').attr('class','checkbox_active');
		}else{
			$('.first_th em').attr('class','checkbox_zhunbei');
		}
	})
	// end 我的购物车全选

	//  购物车单选
	$('.first_th2').click(function(){
		var th_this = $(this).parent().index();
		var names =  $('.first_th2 em').eq(th_this).attr('class'); //获取class名称
		$('.first_th2 em').eq(th_this).attr('class','checkbox_active');
		
		if(names=='checkbox_active'){
			$('.first_th2 em').eq(th_this).attr('class','checkbox_zhunbei')
		}
	})
	// end 购物车单选
	
	// firmOrdert
	
	$('.last_li').click(function(){
		if(tr){
			$('.last_li em').attr('class','checkbox_active')
			tr = false;
		}else{
			$('.last_li em').attr('class','checkbox_zhunbei');
			tr = true;
		}
	})
	
	$('.payment ul li').click(function(){
		$('.payment ul li em').attr('class','checkbox_zhunbei')
		var ms = $(this).index();
		$('.payment ul li em').eq(ms).attr('class','checkbox_active')
	})
	
	$('.money1 label').click(function(){
		if(tr){
			$('.money1 em').attr('class','checkbox_active');
			$('.money1 input').show();
			tr = false;
		}else{
			$('.money1 em').attr('class','checkbox_zhunbei');
			$('.money1 input').hide();
			tr = true;
		}
	})
	
	var ts =true;
	$('.discount label').click(function(){
		if(ts){
			$('.discount em').attr('class','checkbox_active');
			$('.discount input').show();
			ts = false;
		}else{
			$('.discount em').attr('class','checkbox_zhunbei');
			$('.discount input').hide();
			ts = true;
		}
	})
	
	$('.giving').click(function(){
		$('.pop').show();
		$('.giving em').attr('class','checkbox_active');
	})
	
	$('.no').click(function(){
		$('.pop').hide();
		$('.giving em').attr('class','checkbox_zhunbei');
	})
	
	$('.yes').click(function(){
		$('.pop').hide();
	})
	//  end  firmOrdert.html
})
