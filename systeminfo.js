const os = require('os');
const fs = require('fs');

class SystemInfo {
    constructor() {
        this.platform = os.platform();
        this.uptime = os.uptime();
        this.cpuArch = os.arch();
        this.systemName = os.type();
        this.totalMemory = os.totalmem();
        this.freeMemory = os.freemem();
        this.cpuCores = os.cpus().length;
        this.hostname = os.hostname();
        this.networkInterfaces = os.networkInterfaces();
        this.loadAverage = os.loadavg();
    }

    getPlatform() {
        return this.platform;
    }

    getUptime() {
        return this.uptime;
    }

    getCpuArch() {
        return this.cpuArch;
    }

    getSystemName() {
        return this.systemName;
    }

    getTotalMemory() {
        return this.totalMemory;
    }

    getFreeMemory() {
        return this.freeMemory;
    }

    getCpuCores() {
        return this.cpuCores;
    }

    getHostname() {
        return this.hostname;
    }

    getNetworkInterfaces() {
        return this.networkInterfaces;
    }

    getLoadAverage() {
        return this.loadAverage;
    }

    formatBytes(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return '0 Byte';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    saveInfoToFile(filename) {
        const data = {
            platform: this.getPlatform(),
            uptime: this.getUptime(),
            cpuArch: this.getCpuArch(),
            systemName: this.getSystemName(),
            totalMemory: this.formatBytes(this.getTotalMemory()),
            freeMemory: this.formatBytes(this.getFreeMemory()),
            cpuCores: this.getCpuCores(),
            hostname: this.getHostname(),
            networkInterfaces: this.getNetworkInterfaces(),
            loadAverage: this.getLoadAverage()
        };

        fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    }

    displayInfo() {
        console.log("Platform: " + this.getPlatform());
        console.log("Uptime: " + this.getUptime() + " seconds");
        console.log("CPU Architecture: " + this.getCpuArch());
        console.log("System Name: " + this.getSystemName());
        console.log("Total Memory: " + this.formatBytes(this.getTotalMemory()));
        console.log("Free Memory: " + this.formatBytes(this.getFreeMemory()));
        console.log("CPU Cores: " + this.getCpuCores());
        console.log("Hostname: " + this.getHostname());
        console.log("Network Interfaces: ");
        console.log(this.getNetworkInterfaces());
        console.log("Load Average (1m, 5m, 15m): " + this.getLoadAverage().join(", "));
    }
}

// Example of running the SystemInfo class
const systemInfo = new SystemInfo();
systemInfo.displayInfo();
systemInfo.saveInfoToFile('system_info.json');
