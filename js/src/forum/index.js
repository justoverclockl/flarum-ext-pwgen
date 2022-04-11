/*
 * This file is part of justoverclock/flarum-ext-infocards.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import {extend} from 'flarum/common/extend';
import app from 'flarum/forum/app';
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
  const button2 = document.getElementById('buttonpwgen');
  const inputValue = document.getElementById('contentpww');

  button2.addEventListener('click', (e) => {
    e.preventDefault()
    const charSet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$%£_'
    const pwLength = 10;
    inputValue.innerText = generatePassword(pwLength, charSet)
  });

  function generatePassword(length, charset) {
    return Array.from(crypto.getRandomValues(new Uint32Array(length)))
      .map((number) => charset[number % charset.length])
      .join('')
  }
});
