# sudo mv default /etc/nginx/conf.d/reazon.conf
sudo mv default /etc/nginx/sites-enabled/reazon.conf
# sudo mv default /etc/nginx/sites-enabled/default
sudo /etc/init.d/nginx reload
systemctl status nginx
