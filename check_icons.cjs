const fa = require('react-icons/fa');
const si = require('react-icons/si');

const faIcons = ['FaPython', 'FaJava', 'FaDatabase', 'FaBrain', 'FaGithub', 'FaRobot'];
const siIcons = ['SiTensorflow', 'SiPandas', 'SiNumpy', 'SiPowerbi', 'SiMicrosoftexcel', 'SiN8n', 'SiMicrosoftazure', 'SiScikitlearn'];

console.log("Checking FA Icons:");
faIcons.forEach(icon => {
    if (!fa[icon]) console.error(`MISSING: ${icon}`);
    else console.log(`OK: ${icon}`);
});

console.log("\nChecking SI Icons:");
siIcons.forEach(icon => {
    if (!si[icon]) console.error(`MISSING: ${icon}`);
    else console.log(`OK: ${icon}`);
});
