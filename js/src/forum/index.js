/*
 * This file is part of justoverclock/flarum-ext-infocards.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/common/extend';
import app from 'flarum/app';
import SignUpModal from 'flarum/components/SignUpModal';

app.initializers.add('justoverclock/flarum-ext-pwgen', () => {
  extend(SignUpModal.prototype, 'fields', function (items) {
    items.add(
      'generatePassword',
      m('div', [
        m('div', { id: 'buttonpwgen', className: 'button2' }, app.translator.trans('flarum-ext-pwgen.forum.generatebtn')),
        m('div', { id: 'contentpww', className: 'FormControl' }),
      ])
    );
  });
});
extend(SignUpModal.prototype, 'oncreate', function () {
  var button2 = document.getElementById('buttonpwgen');
  button2.addEventListener('click', printPassword);

  function password() {
    var length = app.forum.attribute('pwlenght');
    var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!?=.#$%';
    var retVal = '';
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }

  function printPassword() {
    let content = document.getElementById('contentpww');
    content.innerHTML = password();
  }

  printPassword();
});
