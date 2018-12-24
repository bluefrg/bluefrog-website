<template>
<section id="tech">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3>Experience</h3>
                <div class="spacer-30"></div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row text-center logos">
            <div class="col-md-2 col-sm-6 col-xs-12"><img src="~/assets/img/tech/android.png" alt="Android"></div>
            <div class="col-md-2 col-sm-6 col-xs-12"><img src="~/assets/img/tech/docker.png" alt="Docker"></div>
            <div class="col-md-2 col-sm-6 col-xs-12"><img src="~/assets/img/tech/aws.png" alt="AWS"></div>
            <div class="col-md-2 col-sm-6 col-xs-12"><img src="~/assets/img/tech/nodejs.png" alt="Node.js"></div>
            <div class="col-md-2 col-sm-6 col-xs-12"><img src="~/assets/img/tech/python.png" alt="Python"></div>
            <div class="col-md-2 col-sm-6 col-xs-12"><img src="~/assets/img/tech/php.png" alt="PHP"></div>
        </div>
    </div>
</section>
</template>

<style scoped lang="scss">
.logos {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    
    img {
    filter: grayscale(100%) brightness(100%);
    opacity: 0.4;
    max-height: 80px;
    max-width: 100%;
    padding: 10px 0;
}
}
</style>