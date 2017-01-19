$(function() {

	$("#submitForm").submit(function(e) {
		e.preventDefault();

		var formData = {
			'title': $('input[name=title]').val(),
			'comment': $('input[name=comment]').val(),
			'date': $('input[name=date]').val()
		}
		
		$.post('/blog', formData, function(res) {

			$("#list").prepend("<div>" + "<h3>" + "Title: " + "</h3>" + "<p>" + res.title + "</p>" +
							            "<h3>" + "Comment: " + "</h3>" + "<p>"+ res.comment + "</p>" +
							            "<p id='date-out'>" + "Created At: " + res.date + "</p>" +
							   "</div>");

		})

	});

















});
