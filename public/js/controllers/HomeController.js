var app = angular.module('app')

		.controller('HomeController', ['$scope', function ($scope) {
			var loadBannerImage = function () {
				var initialTime = new Date().getTime();
				var background_images = ['DiezVistas.png', 'GaribaldiLake.png', 'LionsBay.png'];
				var img = new Image();

				$('.container').css('overflow', 'hidden');
				$('#down-arrow').css('visibility', 'hidden');

				img.onload = function () {
					var actualLoadtime = new Date().getTime() - initialTime;
					var desiredLoadtime = 800;
					var waitAdditional = (actualLoadtime < desiredLoadtime) ? desiredLoadtime - actualLoadtime : 0;
					setTimeout(function () {
						$('#banner-image').css({'background': 'url(' + img.src + ') no-repeat center center'});
						$('#loading').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$('#loading').css("display", "none");
						});
						$('.container').css('overflow', 'visible');
						$('#down-arrow').css('visibility', 'visible');
						$('#loading').animateCss('fadeOut');
					}, waitAdditional);
				};
				img.src = 'public/img/' + background_images[Math.floor(Math.random() * background_images.length)];
			};

			loadBannerImage();

			$scope.projects = [
				{
					'name': "Hiking Vancouver",
					'description': "Find hiking trails near Vancouver, BC with this hybrid mobile Android app. View trail photos and locations, and filter trails by location, length, difficulty, and more!",
					'href': "http://hike.vincentwong.me",
					'img': "public/img/projects/HikingVancouver.jpg"
				},
				{
					'name': "ChromeOverflow",
					'description': "A Chrome extension that provides a unified view of the top Stack Overflow results for different exceptions encountered during development.",
					'href': "http://github.com/risamaki/ChromeOverflow",
					'img': "public/img/projects/ChromeOverflow.jpg"
				},
				{
					'name': "Currency Converter",
					'description': "Use this web app to quickly convert between 32 different currencies. Exchange rates are updated daily.",
					'href': "http://currency.vincentwong.me",
					'img': "public/img/projects/CurrencyConverter.jpg"
				},
				{
					'name': "Tamaki Roulette",
					'description': "Randomly choose an option from a list of choices. Make an account to easily save and load lists.",
					'href': "https://tamakiroulette.herokuapp.com/",
					'img': "public/img/projects/TamakiRoulette.jpg"
				},
				{
					'name': "Fruit Finder",
					'description': "Display the locations of local community gardens and fruit trees in Vancouver.",
					'href': "https://gory-coffin-2047.herokuapp.com/",
					'img': "public/img/projects/FruitFinder.jpg"
				},
				/*{
				 'name': "Music Store",
				 'description': "Shop from a fake online music store.",
				 'href': "http://musicshop.azurewebsites.net/",
				 'img': "public/img/projects/MusicStore.jpg"
				 }*/
			];

			/*
			 $scope.instagramPics = [
			 {
			 "href": "https://www.instagram.com/p/-zawaiKW5F/",
			 "img": "https://instagram.com/p/-zawaiKW5F/media/?size=m",
			 "text": "Capilano Canyon"
			 }
			 ]
			 */

			window.addEventListener('touchstart', function () {
				if (!window.TOUCH_DEVICE) {
					var images = document.getElementById("projects").getElementsByClassName("images");
					for (var i = 0; i < images.length; i++) {
						var texts = images[i].getElementsByClassName("text");
						for (var j = 0; j < texts.length; j++) {
							texts[j].style.opacity = 1;
						}
					}
				}
				window.TOUCH_DEVICE = true;
			});

		}]);