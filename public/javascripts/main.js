$(function() {

	$("#submitForm").submit(function(event) {

		var formData = {
			'title': $('input[name=title]').val(),
			'comment': $('input[name=comment]').val()
		}

		// console.log(formData.title);
		// console.log(formData.comment);

		
		$.post('/blog', formData, function(res) {
			console.log(res);

			$("#blogPosts").text(res.title);
			$("#blogPosts").text(res.comment);
		})

		event.preventDefault();
	});

















});
