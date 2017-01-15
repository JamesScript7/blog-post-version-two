$(function() {

	$("#submitForm").submit(function(event) {
		event.preventDefault();

		var formData = {
			'title': $('input[name=title]').val(),
			'comment': $('input[name=comment]').val(),
			'date': new Date()
		}
		
		$.post('/blog', formData, function(res) {
			console.log(res);

			$("#blogTitle").text(res.title);
			$("#blogComment").text(res.comment);
			$("#blogDate").text(res.date);

		})

	});

















});
