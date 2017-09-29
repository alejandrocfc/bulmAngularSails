this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/todo.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="section">\n  <div class="container">\n      <div class="columns">\n        <div class="column is-4">\n          <div ng-if="!file" ngf-select="upload($files)" ngf-multiple="false" ngf-pattern="image/*"\n               ngf-resize="{width: 180, height: 180, centerCrop: true}" class="image">\n            <img src="https://placehold.it/180x180">\n          </div>\n          <div ng-if="file" ngf-select="upload($files)" ngf-multiple="false" ngf-pattern="image/*"\n               ngf-resize="{width: 180, height: 180, centerCrop: true}" class="image">\n            <img ngf-src="!file.$error && file">\n          </div>\n          <div ng-if="file">\n            <div class="field is-grouped">\n              <p ng-click="toDB(file)" class="control">\n                <a class="button is-primary">\n                  Subir\n                </a>\n              </p>\n              <p class="control" ngf-select="upload($files)" ngf-multiple="false" ngf-pattern="image/*"\n                 ngf-resize="{width: 180, height: 180, centerCrop: true}">\n                <a class="button">\n                  Cambiar\n                </a>\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class="column is-8">\n          <form action="" name="formPartner">\n            <div class="field">\n              <label class="label">Nombre</label>\n              <div class="control has-icons-right">\n                <input name="name" class="input" ng-class="{\'is-danger\': formPartner.name.$touched && formPartner.name.$invalid,\'is-success\':formPartner.name.$touched && formPartner.name.$valid}" ng-model="form.name" type="text" placeholder="CreeTec" required>\n                <span class="icon is-small is-right">\n                    <i ng-class="{\'fa fa-warning\':formPartner.name.$touched && formPartner.name.$invalid,\'fa fa-check\':formPartner.name.$touched && formPartner.name.$valid}"></i>\n                  </span>\n              </div>\n              <!--p class="help is-success">This username is available</p-->\n            </div>\n            <div class="field">\n              <label class="label" for="locationField">Dirección</label>\n              <div class="control has-icons-right" id="locationField">\n                <input class="input" id="autocomplete" placeholder="Ingresa tu dirección" onfocus="geolocate();" type="text"/>\n              </div>\n              <!--<label class="label">Dirección</label>\n              <div class="control has-icons-right">\n                <input name="address" class="input"  ng-class="{\'is-danger\': formPartner.address.$touched && formPartner.address.$invalid,\'is-success\':formPartner.address.$touched && formPartner.address.$valid}" type="text" ng-model="form.address" placeholder="Direcciòn" required>\n                <span class="icon is-small is-right">\n                    <i ng-class="{\'fa fa-warning\':formPartner.address.$touched && formPartner.address.$invalid,\'fa fa-check\':formPartner.address.$touched && formPartner.address.$valid}"></i>\n                  </span>\n              </div>-->\n              <!--p class="help is-danger">This email is invalid</p-->\n            </div>\n            <div class="field">\n              <div id="address" class="flex wrap columns">\n                <div class="column is-6">\n                  <label class="label">Dirección</label>\n                  <div class="columns">\n                    <div class="column is-6 control">\n                      <input id="route" disabled="true" class="input" required/>\n                    </div>\n                    <div class="column is-6 control">\n                      <input id="street_number" disabled="true" class="input"/>\n                    </div>\n                  </div>\n                </div>\n                <div class="column is-2">\n                  <label class="label">Ciudad</label>\n                  <div class="control">\n                    <input id="locality" disabled="true" class="input" required/>\n                  </div>\n                </div>\n                <div class="column is-2">\n                  <label class="label">Dpto</label>\n                  <div class="control">\n                    <input id="state" disabled="true" class="input" required/>\n                  </div>\n                </div>\n                <div class="column is-2">\n                  <label class="label">País</label>\n                  <div class="control">\n                    <input id="country" disabled="true" class="input" required/>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class="columns">\n              <div class="column is-4">\n                <label class="label">Teléfono</label>\n                <div class="control has-icons-right">\n                  <input name="phone" class="input" ng-class="{\'is-danger\': formPartner.phone.$touched && formPartner.phone.$invalid,\'is-success\':formPartner.phone.$touched && formPartner.phone.$valid}" type="number" ng-model="form.phone" placeholder="Text input" required>\n                  <span class="icon is-small is-right">\n                      <i ng-class="{\'fa fa-warning\':formPartner.phone.$touched && formPartner.phone.$invalid,\'fa fa-check\':formPartner.phone.$touched && formPartner.phone.$valid}"></i>\n                    </span>\n                </div>\n                <!--p class="help is-success">This username is available</p-->\n              </div>\n              <div class="column is-4">\n                <label class="label">Email</label>\n                <div class="control has-icons-right">\n                  <input name="email" class="input" ng-class="{\'is-danger\': formPartner.email.$touched && formPartner.email.$invalid,\'is-success\':formPartner.email.$touched && formPartner.email.$valid}" ng-model="form.email" placeholder="creetec@mail.com" ng-pattern="/^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$/" required>\n                  <span class="icon is-small is-right">\n                      <i ng-class="{\'fa fa-warning\':formPartner.email.$touched && formPartner.email.$invalid,\'fa fa-check\':formPartner.email.$touched && formPartner.email.$valid}"></i>\n                    </span>\n                </div>\n                <!--p class="help is-success">This username is available</p-->\n              </div>\n              <div class="column is-4">\n                <label class="label">Website</label>\n                <div class="control has-icons-right">\n                  <input name="website" class="input" ng-class="{\'is-danger\': formPartner.website.$touched && formPartner.website.$invalid,\'is-success\':formPartner.website.$touched && formPartner.website.$valid}" ng-model="form.website" placeholder="creetec.com" ng-pattern="/^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?$/" required>\n                  <span class="icon is-small is-right">\n                      <i ng-class="{\'fa fa-warning\':formPartner.website.$touched && formPartner.website.$invalid,\'fa fa-check\':formPartner.website.$touched && formPartner.website.$valid}"></i>\n                    </span>\n                </div>\n                <!--p class="help is-success">This username is available</p-->\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <hr>\n      <div class="field">\n        <span class="title is-4">Descripción</span>\n        <div class="control">\n          <textarea class="textarea" ng-maxlength="450" maxlength="450" ng-model="form.description" placeholder="Textarea"></textarea>\n        </div>\n      </div>\n      <div class="field">\n        <div class="control">\n          <!--<button ng-disabled="formPartner.$invalid" ng-click="submit()" class="button is-primary">Submit</button>-->\n          <button ng-click="submit()" class="button is-primary">Submit</button>\n        </div>\n      </div>\n    <hr>\n    <div class="columns">\n      <div class="column">\n        <span class="title is-4">Product Name</span>\n        <span class="title is-5 has-text-muted">\n            <a href="" ng-click="showModal = true">+</a>\n          </span>\n      </div>\n    </div>\n  </div>\n</div>\n<div class="modal" ng-class="{\'is-active\':showModal}">\n  <div class="modal-background"></div>\n  <div class="modal-card">\n    <header class="modal-card-head">\n      <p class="modal-card-title">Modal title</p>\n      <button ng-click="showModal = false" class="delete" aria-label="close"></button>\n    </header>\n    <section class="modal-card-body">\n      <!-- Content ... -->\n    </section>\n    <footer class="modal-card-foot">\n      <button class="button is-success">Save changes</button>\n      <button ng-click="showModal = false" class="button">Cancel</button>\n    </footer>\n  </div>\n</div>\n';

}
return __p
};