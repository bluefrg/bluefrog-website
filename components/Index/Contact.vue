<template>
<section id="contact">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h3>Reach Me</h3>
                <div class="spacer-30"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">

                <p>You can reach me by <a href="javascript:;" onclick="$crisp.push(['do', 'chat:open']);">sending me an instant message</a>, 
                    or through my social media accounts listed in the menu, or simply by email at:</p>
                <p class="text-center" style="font-size: 20px;"><strong>mike@bluefrog.ca</strong></p>

            </div>
            <div class="col-md-6">

                <p>Not in a hurry? Fill in the contact form.</p>

                <form action="#" method="post" id="contact-form" class="form-horizontal">
                    <div class="form-group">
                        <div class="col-sm-12">
                        <textarea class="form-control" name="message" placeholder="Enter your message here."></textarea>
                    </div>
                    </div>

                    <div class="form-group">
                        <label class="col-sm-3 control-label">Your Email</label>
                        <div class="col-sm-9">
                            <input type="email" name="email" class="form-control" placeholder="Email">
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-default">Send Message</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
  mounted() {
    AWS.config.region = 'us-east-1'
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:2b6e2575-9110-4d11-810a-bf835fa3ea4d'
    })

    const sns = new AWS.SNS()
    $('#contact-form').on('submit', function () {
        var t = this
        $(':submit', t).prop('disabled', true)
        sns.publish({
            Message: "Email: " + $('[name="email"]', this).val() + "\nMessage: " + $('[name="message"]', this).val(),
            Subject: 'Bluefrog.ca Contact',
            TopicArn: 'arn:aws:sns:us-east-1:500035830678:bluefrog-ca-contact-form'
        }, function(err, data) {
            if (err) alert("Something went wrong. I'm afraid I didn't get your message. Please email me directly.")
            else     alert("Thank you for your message! I usually respond to emails within 1 to 2 days.")
            $(':submit', t).prop('disabled', false)
        })

        return false
    })
  },
}
</script>

<style scoped lang="scss">

</style>