# Source image
FROM wordpress:latest

# We're going to use this path multile times. So save it in a variable.
ARG XDEBUG_INI="/usr/local/etc/php/conf.d/xdebug.ini"

# Install AND configure Xdebug
RUN pecl install xdebug \
	&& docker-php-ext-enable xdebug 