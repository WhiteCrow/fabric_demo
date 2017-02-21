DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )";

docker-compose -f $DIR/docker-compose.yml kill;
docker-compose -f $DIR/docker-compose.yml down;
