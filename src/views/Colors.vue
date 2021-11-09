<template>

    <div>
        <CmsNav v-bind:previewToggleProp="false"></CmsNav>

        <section class="ptb-80 jumbotron" style="height: 100%; background: #F9F6F6">
            <div class="container">
                <div class="section-title">
                    <h2>Color scheme</h2>
                </div>
            </div>

            <div class="row" style="padding: 2px">
                <div class="color-scheme col-sm-10 col-12 offset-sm-1">
                    <div class="row">
                        <div class="col-sm-10 col-12 offset-sm-1">
                            <div class="row">

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio"></div>
                                        <div class="color-selected">TEST</div>
                                        <p class="color-selected">test</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio"></div>
                                        <div class="color-selected">TEST</div>
                                        <p class="color-selected">test</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio"></div>
                                        <div class="color-selected">TEST</div>
                                        <p class="color-selected">test</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio"></div>
                                        <div class="color-selected">TEST</div>
                                        <p class="color-selected">test</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio"></div>
                                        <div class="color-selected">TEST</div>
                                        <p class="color-selected">test</p>
                                    </div>
                                </div>

                                <div class="col-sm-2 col-4 color-select">
                                    <div>
                                        <div class="color-radio"></div>
                                        <div class="color-selected">TEST</div>
                                        <p class="color-selected">test</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="button-color">
                        <button type="submit" class="btn btn-primary">Save color
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        </button>
                    </div>

                    <div class="row">
                        <img class="col-sm-6 col-12 offset-sm-3 preview-color" src="../assets/img/website-color-1.png">
                    </div>

                </div>
            </div>
        </section>
    </div>

</template>




<script>

  import CmsNav from "../components/profile/section/CmsNav";

    export default {
        components: {
            CmsNav
        }
    };

</script>
