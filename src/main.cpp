#include <iostream>

int main(int argc, char *argv[]) {
    if (argc < 2) {
        std::cerr << "No args provided.\n";
        return 1;
    }

    std::cout << argv[1] << std::endl;
    return 0;
}