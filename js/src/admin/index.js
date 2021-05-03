/*
 * This file is part of justoverclock/flarum-ext-infocards.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/app';

app.initializers.add('justoverclock/flarum-ext-pwgen', () => {
  app.extensionData.for('justoverclock-pwgen').registerSetting({
    setting: 'justoverclock-pwgen.pwlenght',
    name: 'pwlenght',
    type: 'number',
    placeholder: 'Example: 8',
    label: app.translator.trans('flarum-ext-pwgen.admin.passlenght'),
    help: app.translator.trans('flarum-ext-pwgen.admin.pwhelp'),
  });
});
