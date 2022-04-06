import { prependHttp } from './prepend-http';

const rawDomain = 'example.com';
const httpUrl = `http://${rawDomain}`;
const httpsUrl = `https://${rawDomain}`;
const doubleSlashUrl = `//${rawDomain}`;

const localhostUrl = `localhost`;
const httpLocalhostUrl = `http://${localhostUrl}`;
const httpsLocalhostUrl = `https://${localhostUrl}`;

const localhostWithPort = `localhost:8080`;
const httpLocalhostWithPortUrl = `http://${localhostWithPort}`;
const httpsLocalhostWithPortUrl = `https://${localhostWithPort}`;

const relativePath = './relative';
const relativeParentPath = '../relative';
const absolutePath = '/absolute';

const emailAddress = 'mailto:info@site.com';
const telNumber = 'tel:+1234567890';

describe('Prepend HTTP', () => {
  it('should add http to domain', () => {
    expect(prependHttp(rawDomain, { https: false })).toEqual(httpUrl);
  });

  it('should not modify http url', () => {
    expect(prependHttp(httpUrl, { https: false })).toEqual(httpUrl);
  });

  it('should not modify double slash url', () => {
    expect(prependHttp(doubleSlashUrl, { https: false })).toEqual(
      doubleSlashUrl
    );
  });

  it('should add http to localhost', () => {
    expect(prependHttp(localhostUrl, { https: false })).toEqual(
      httpLocalhostUrl
    );
  });

  it('should add http to localhost with port', () => {
    expect(prependHttp(localhostWithPort, { https: false })).toEqual(
      httpLocalhostWithPortUrl
    );
  });

  it('should clean and add http to localhost with port and ending spaces', () => {
    expect(prependHttp(`${localhostWithPort}  `, { https: false })).toEqual(
      httpLocalhostWithPortUrl
    );
  });

  it('should not modify relative path', () => {
    expect(prependHttp(relativePath, { https: false })).toEqual(relativePath);
  });

  it('should not modify relative parent path', () => {
    expect(prependHttp(relativeParentPath, { https: false })).toEqual(
      relativeParentPath
    );
  });

  it('should not modify absolute path', () => {
    expect(prependHttp(absolutePath, { https: false })).toEqual(absolutePath);
  });

  it('should not modify email address', () => {
    expect(prependHttp(emailAddress, { https: false })).toEqual(emailAddress);
  });

  it('should not modify tel number', () => {
    expect(prependHttp(telNumber, { https: false })).toEqual(telNumber);
  });
});

describe('Prepend HTTPS', () => {
  it('should add https to domain', () => {
    expect(prependHttp(rawDomain, { https: true })).toEqual(httpsUrl);
  });

  it('should not modify https url', () => {
    expect(prependHttp(httpsUrl, { https: true })).toEqual(httpsUrl);
  });

  it('should not modify double slash url', () => {
    expect(prependHttp(doubleSlashUrl, { https: true })).toEqual(
      doubleSlashUrl
    );
  });

  it('should add https to localhost', () => {
    expect(prependHttp(localhostUrl, { https: true })).toEqual(
      httpsLocalhostUrl
    );
  });

  it('should add https to localhost with port', () => {
    expect(prependHttp(localhostWithPort, { https: true })).toEqual(
      httpsLocalhostWithPortUrl
    );
  });

  it('should clean and add http to localhost with port and ending spaces', () => {
    expect(prependHttp(`${localhostWithPort}  `, { https: true })).toEqual(
      httpsLocalhostWithPortUrl
    );
  });

  it('should not modify relative path', () => {
    expect(prependHttp(relativePath, { https: true })).toEqual(relativePath);
  });

  it('should not modify relative parent path', () => {
    expect(prependHttp(relativeParentPath, { https: true })).toEqual(
      relativeParentPath
    );
  });

  it('should not modify absolute path', () => {
    expect(prependHttp(absolutePath, { https: true })).toEqual(absolutePath);
  });

  it('should not modify email address', () => {
    expect(prependHttp(emailAddress, { https: true })).toEqual(emailAddress);
  });

  it('should not modify tel number', () => {
    expect(prependHttp(telNumber, { https: true })).toEqual(telNumber);
  });
});
