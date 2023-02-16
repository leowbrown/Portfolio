<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'pers_port' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '4ml*de$8-FlM1f1@HOIY$NhKcmr/[K/$*F{ ,GhCh,:g8kb*_0:7JS3=pS3qRe<}' );
define( 'SECURE_AUTH_KEY',  'Kw q*d|P>75@qt1}ZomMX[tgI[iMIm5k(uR&o/x!/>_*$Y9tbRUYPfE~mr`k|dQD' );
define( 'LOGGED_IN_KEY',    '+d&aPMHK@HVsfd(a42=g0nk|8ty;H[*rWIwQ?v3>a$@v13grtN1qW(Wdql;9qSOi' );
define( 'NONCE_KEY',        'EUHThwDa>KdYUoP]@0&tX Q#hj}1lt!%o4)Ku1]/Dr{o~k3{&yX5nI6X:X<VJ v$' );
define( 'AUTH_SALT',        '0k3~y/IoDNbA^M/8z[0ldPP@GXtza KCZ7|[:Ve#B.[(!cN0a,I J&j/2U7%tIDf' );
define( 'SECURE_AUTH_SALT', 'ww6BsF;XX3IAPMV~{gX7)>Z%1qsAI3b$1S,Gv[bH:GOdZJ/$T+HMCm08Y_e4p)<+' );
define( 'LOGGED_IN_SALT',   '1wmfTm3<<>wv0n7FSV2!xckx-QECX}u6f*PU~57 32;M)sF?0#I#g*U}YZ lXrTb' );
define( 'NONCE_SALT',       'f}/XP967xr~yJ/&++8uJCMj;s|(T#}50Yi@fW]y7|KRcM4Uhh-Bwbo/Zqi}r!X38' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
