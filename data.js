async function getData() {
    await $.ajax({
        url: 'https://shopping-mall-rzdwe.run.goorm.site/data',
        type: 'GET',
        
        success: function(response) {
            updateProgressChart(response.progress)
        },
        error: function(err) {
            console.error(err);
        }
    });
}

getData();
